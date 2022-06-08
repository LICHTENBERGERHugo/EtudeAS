import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import Banniere from "../../components/Banniere";
import Sponsors from "../../components/Sponsors";

const Private = () => {
  const token = JSON.parse(sessionStorage.getItem("userlogged"));
  console.log(token);
  if (token === null || token?.result === false) {
    sessionStorage.removeItem("userlogged");
    return <Navigate to="/connect" />;
  } else {
    return (
      <div>
        <Banniere />
        <Outlet />
        <Sponsors />
      </div>
    );
  }
};

export default Private;
