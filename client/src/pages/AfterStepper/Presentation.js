import React, { useContext, useEffect } from "react";

import { MyContext } from "../Signin";

const Presentation = () => {
  const { setStepCompleted } = useContext(MyContext);
  useEffect(() => {
    setStepCompleted(true);
  }, []);
  return (
    <div>
      <h1 className="section-title">Présentation</h1>
      <div className="section-content">
        L' A.S. de l'INSA Rennes permet aux étudiants de pratiquer le sport dans
        les meilleures conditions possibles en parallèle de leurs études. En
        bref, l'AS c'est :
        <br />
        - Environ 600 licenciés
        <br />
        - Des évènements sportifs organisés toute l'année
        <br />
        - Un accompagnement des étudiants durant toutes leurs compétitions de
        l'année
        <br />
        - La possibilité de découvrir et pratiquer un large échantillon de
        sports
        <br />
        <br />
        <br />
        <br />
        <h2>Inscriptions à l'AS</h2>
        <span>
          Alors comme ca, on est motivé pour faire du sport à l'INSA cette année
          ? Du coup il faut que tu t'inscrives à l'AS coco !!
        </span>
      </div>
    </div>
  );
};

export default Presentation;
