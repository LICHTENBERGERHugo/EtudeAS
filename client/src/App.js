import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import Connexion from "./pages/Connexion";
import Presentation from "./pages/AfterStepper/Presentation";
import Choix from "./pages/AfterStepper/Choix";
import Infos from "./pages/AfterStepper/Infos";
import Certif from "./pages/AfterStepper/Certif";
import Paiement from "./pages/AfterStepper/Paiement";
import Recapitulatif from "./pages/AfterStepper/Recapitulatif";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />}>
            <Route path="/signin/presentation" element={<Presentation />} />
            <Route path="/signin/choix" element={<Choix />} />
            <Route path="/signin/infos" element={<Infos />} />
            <Route path="/signin/certif" element={<Certif />} />
            <Route path="/signin/pay" element={<Paiement />} />
            <Route path="/signin/recap" element={<Recapitulatif />} />
          </Route>
          <Route path="/connect" element={<Connexion />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
