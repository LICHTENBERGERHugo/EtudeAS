import React, { createContext, useState } from "react";

import MyStepper from "../components/MyStepper";
import Banniere from "../components/Banniere";
import { Outlet } from "react-router-dom";
import Sponsors from "../components/Sponsors";

// TODO Créer un context pour ce stepper

export const MyContext = createContext();
const Signin = () => {
  const [userData, setUserData] = useState();
  const [stepCompleted, setStepCompleted] = useState(false);
  return (
    <div>
      <Banniere />
      <h1 style={{ marginBottom: 40, textAlign: "center" }}>Inscription</h1>
      <MyContext.Provider
        value={{ userData, setUserData, stepCompleted, setStepCompleted }}
      >
        <MyStepper />
        <Outlet />
      </MyContext.Provider>

      <Sponsors />
    </div>
  );
};

export default Signin;
