import React, { useState } from "react";

import MyStepper from "../components/MyStepper";
import Banniere from "../components/Banniere";
import { ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import { Outlet } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Banniere />
        <MyStepper />
        <Outlet />
      </ThemeProvider>
    </div>
  );
};

export default Signin;
