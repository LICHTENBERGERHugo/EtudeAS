import React, { useState } from "react";

import MyStepper from "../components/MyStepper";
import Banniere from "../components/Banniere";
import { Outlet } from "react-router-dom";
import Sponsors from "../components/Sponsors";

const Signin = () => {
  return (
    <div>
      <Banniere />
      <h1 style={{ marginBottom: 40, textAlign: "center" }}>Inscription</h1>
      <MyStepper />
      <Outlet />
      <Sponsors />
    </div>
  );
};

export default Signin;
