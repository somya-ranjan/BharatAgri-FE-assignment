import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DocumentScannerTwoToneIcon from "@mui/icons-material/DocumentScannerTwoTone";
import SearchIcon from "@mui/icons-material/Search";

// // static import
import { getCropListData } from "../../store/actions";
import CropImgModal from "./details/CropImgModal";
import "./style.scss";

function CropList() {
  // // initial state
  const dispatch = useDispatch();

  // // redux state
  const { cropsList, isCropsListLoading } = useSelector(
    (state) => state?.crops
  );

  // // local state
  const [cropImgModal, setCropImgModal] = useState({ open: false, data: {} });
  const [searchValue, setSearchValue] = useState("");
  const [cropDataList, setCropDataList] = useState([]);

  const handelSearch = useCallback(() => {
    const lowerCaseSearchValue = searchValue?.toLowerCase();
    const data = cropsList?.filter((crop) =>
      crop?.crop_name?.toLowerCase().includes(lowerCaseSearchValue)
    );

    setCropDataList(data || []);
  }, [cropsList, searchValue]);

  useEffect(() => {
    setCropDataList(cropsList);
    handelSearch();
  }, [searchValue, cropsList]);

  useEffect(() => {
    dispatch(getCropListData());
  }, []);

  return (
    <>
      <Container>
        {/* search bar container */}
        <Box sx={{ textAlign: "end" }}>
          <OutlinedInput
            type="search"
            name="search"
            size="small"
            fullWidth
            id="outlined-adornment-weight"
            sx={{
              borderRadius: "20px",
              width: { xs: "100%", sm: "70%", md: "60%", lg: "50%", xl: "40%" },
            }}
            placeholder="Search by crops name..."
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  sx={{ p: "0" }}
                  // onClick={() => setSearchValue(searchValue)}
                >
                  <SearchIcon className="muted" style={{ fontSize: "20px" }} />
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>

        {/* crops list container */}
        <Grid container spacing={{ xs: 1.5, sm: 2.5, md: 3.5, lg: 4 }} py={2}>
          {isCropsListLoading ? (
            [...new Array(6)].map(() => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={Math.random()}>
                <Paper sx={{ px: 2, py: 1 }}>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                  <Skeleton width="60%" />
                </Paper>
              </Grid>
            ))
          ) : cropDataList?.length > 0 ? (
            cropDataList?.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={Math.random()}>
                <Paper
                  elevation={3}
                  sx={{ px: 2, py: 1 }}
                  onClick={() => setCropImgModal({ open: true, data: item })}
                  className="crop_list_container"
                >
                  <img
                    src={item?.thumbnails?.[0]?.image}
                    alt="crop img"
                    className="img_fluid"
                  />
                  <Typography variant="h6">{item?.crop_name}</Typography>
                </Paper>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Paper
                sx={{
                  minHeight: "83vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  rowGap: 2,
                  opacity: 0.5,
                }}
              >
                <DocumentScannerTwoToneIcon sx={{ fontSize: "100px" }} />
                <Typography component="p">Data not found</Typography>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>

      <CropImgModal
        open={cropImgModal.open}
        onClose={() => {
          setCropImgModal({ open: false, data: {} });
        }}
        cropsData={cropImgModal.data}
      />
    </>
  );
}

export default CropList;
