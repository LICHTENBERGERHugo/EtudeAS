import React, { useContext, useEffect } from "react";

import { MyContext } from "../Signin";

const Paiement = () => {
  const URL = `https://lyf.apayer.fr/as-insa-rennes/licence-20212022`;
  const { setStepCompleted } = useContext(MyContext);
  useEffect(() => {
    setStepCompleted(true);
  }, []);

  return (
    <div>
      <h1 className="section-title">
        Veuillez renseigner vos informations de paiement
      </h1>
      <div className="section-content">
        <label>Cette étape est obligatoire.</label>
        <br />
        <br />

        <iframe className="Lyfpay" frameBorder="0" src={URL} scrolling="no" />
      </div>
    </div>
  );
};

export default Paiement;
