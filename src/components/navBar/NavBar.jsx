import { memo, useState } from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

// // static import
import LogoutModal from "../../view/auth/modal/LogoutModal";
import { BRAND_LOGO } from "../../assets/logo";

function NavBar() {
  // // local state
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  return (
    <>
      <Box sx={{ py: 2, boxShadow: 3, mb: 2 }}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ maxWidth: 200 }}>
            <img src={BRAND_LOGO} alt="brand logo" className="img_fluid" />
          </Box>
          <Box>
            <IconButton onClick={() => setOpenLogoutModal(true)}>
              <LogoutIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>
      <LogoutModal
        isOpen={openLogoutModal}
        onClose={() => setOpenLogoutModal(false)}
      />
    </>
  );
}

export default memo(NavBar);
