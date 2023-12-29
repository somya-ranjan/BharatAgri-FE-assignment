import React from "react";

export const guestRoutes = [
  {
    path: "/sign-in",
    name: "SignIn",
    exact: true,
    component: React.lazy(() => import("../../view/auth/SignIn")),
  },

  {
    redirectRoute: true,
    name: "SignIn",
    path: "/sign-in",
  },
];
export const userRoutes = [
  {
    path: "/",
    name: "Crops",
    exact: true,
    component: React.lazy(() => import("../../view/crop/CropList")),
  },

  {
    redirectRoute: true,
    name: "Crops",
    path: "/",
  },
];
