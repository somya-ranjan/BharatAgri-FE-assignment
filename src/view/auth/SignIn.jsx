import { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

// // static import
import signInValidationSchema from "./validation/signInvalidation";
import { userSignIn } from "../../store/actions";
import toaster from "../../lib/toaster";

function SignIn() {
  // // initial state
  const dispatch = useDispatch();

  // // local state
  const [showPsw, setShowPsw] = useState(false);

  // // validation
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: signInValidationSchema,
    onSubmit: (values) => {
      if (values.userName === "bharatagri" && values.password === "1234") {
        localStorage.setItem("authToken", Math.random());
        dispatch(userSignIn());
        formik.resetForm();
      } else {
        toast.error("Please enter correct credential.", {
          onClose: () =>
            toaster.info("User Name:-bharatagri and Password:-1234"),
        });
      }
    },
  });
  return (
    <Grid container justifyContent="center" alignItems="center" height="84vh">
      <Grid item xs={11} sm={6} md={4.5} lg={4} xl={3}>
        <Paper elevation={3} sx={{ px: 2.5, py: 4 }}>
          <PersonIcon
            sx={{
              fontSize: 80,
              color: "#256d9c",
              border: "5px solid #256d9c",
              borderRadius: "50%",
              p: 1,
              display: "block",
              mx: "auto",
              mb: 4,
            }}
          />
          <Stack spacing={2.7} component="form" onSubmit={formik.handleSubmit}>
            <TextField
              type="text"
              label="User Name"
              name="userName"
              variant="outlined"
              size="small"
              fullWidth
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.userName && formik.errors.userName)}
              helperText={
                formik.touched.userName &&
                formik.errors.userName &&
                formik.errors.userName
              }
            />
            <TextField
              type={showPsw ? "text" : "password"}
              label="Password"
              name="password"
              variant="outlined"
              size="small"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={
                formik.touched.password &&
                formik.errors.password &&
                formik.errors.password
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setShowPsw(!showPsw)}>
                      {showPsw ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ textTransform: "capitalize" }}
            >
              Login
            </Button>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SignIn;
