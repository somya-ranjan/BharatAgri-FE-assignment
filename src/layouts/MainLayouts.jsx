import React, { memo } from "react";
import { Outlet } from "react-router-dom";

// // static import
import NavBar from "../components/navBar/NavBar";

function MainLayouts({ isAuthenticated }) {
  if (isAuthenticated) {
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );
  }
  return (
    <>
      <Outlet />
    </>
  );
}

export default memo(MainLayouts);
