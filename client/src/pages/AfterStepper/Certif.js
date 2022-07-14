import { Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { MyContext } from "../Signin";

const Certif = () => {
  let [file, setFile] = useState({});
  let [filename, setFilename] = useState();
  let [message, setMessage] = useState();
  const [checked, setChecked] = React.useState(false);

  const { userData } = useContext(MyContext);
  const { setStepCompleted } = useContext(MyContext);
  useEffect(() => {
    setStepCompleted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("certif", file);
    console.log(formData.get("certif"));
    formData.append("mail", userData.mail);
    await fetch("http://localhost:5000/upload/postFile", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.result);
        setMessage(data.result);
      });
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <h1 className="section-title">Certificat médical</h1>
      <div className="section-content">
        <label>Cette étape est optionnelle.</label>
        <br />
        <br />
        Votre certificat médical fera uniquement l’objet d’un traitement en
        interne et ne sera, en aucun cas, divulgué à un tiers.
        <br />
        <br />
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={handleChangeCheckbox} />
          }
          label="Je confirme mon choix"
        />
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <label>Sélectionner le fichier PDF </label>
          <br />
          <input
            type="file"
            id="medfile"
            name="certif"
            accept=".pdf"
            onChange={handleChange}
          />
          <button type="submit" property="disabled">
            Envoyer
          </button>
          {message != undefined && <h4>{message}</h4>}
        </form>
      </div>
    </div>
  );
};

export default Certif;
