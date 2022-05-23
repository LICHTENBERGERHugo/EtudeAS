import React, { useContext, useEffect } from "react";

import { MyContext } from "../Signin";

const Recapitulatif = () => {
  const { userData } = useContext(MyContext);
  const { setStepCompleted } = useContext(MyContext);
  useEffect(() => {
    setStepCompleted(true);
  }, []);

  let nom = userData.nom;
  let prenom = userData.prenom;
  let adress = userData.adress;
  let postcode = userData.postcode;
  let city = userData.city;

  return (
    <div>
      <h1 className="section-title">Récapitulatif</h1>
      <div className="section-content">
        <h2>Voilà ce que vous avez commandé</h2>
        <h3>
          Licence au nom de : {prenom} {nom}
        </h3>
        <br />
        <h3>
          A l'adresse : {adress},{postcode},{city}
        </h3>
        <br />
        {/* <h3>Telephone : {tel}</h3> */}
        <br />
      </div>
    </div>
  );
};

export default Recapitulatif;
