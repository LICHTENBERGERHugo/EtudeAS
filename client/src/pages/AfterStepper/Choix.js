import React, { useContext, useEffect } from "react";

import { MyContext } from "../Signin";

const Choix = () => {
  const { setStepCompleted } = useContext(MyContext);
  useEffect(() => {
    setStepCompleted(true);
  }, []);
  return (
    <div>
      <h1 className="section-title">Adhésion AS INSA Rennes</h1>
      <div className="section-content">
        <span>
          Cette adhésion permet de participer à toutes les compétitions
          organisées par la Fédération Française du Sport Universitaire et aux
          événements de l'ASSOCIATION SPORTIVE. Vous serez licencié à la FFSU.
          <br />
          Montant à payer pour la durée de l'adhésion : 22,50 €.
          <br />
          <br />
          Les informations recueillies sur ce formulaire sont enregistrées dans
          un fichier informatisé par l'Association Sportive dans le but de créer
          vos licences sportives.
          <br />
          Elles sont conservées pour une durée de 1 an et seront supprimées par
          la suite.
        </span>
      </div>
    </div>
  );
};

export default Choix;
