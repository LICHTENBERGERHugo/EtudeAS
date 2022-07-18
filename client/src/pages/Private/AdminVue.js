import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ListUsers from "../../components/ListUsers";

const AdminVue = () => {
  const [message, setMessage] = useState();

  const [open, setOpen] = React.useState(false);

  function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute("href", text);
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  const handleExport = async () => {
    await fetch("http://193.52.94.171:5000/csv/export", { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMessage(data.result);
      })
      .then(() => {
        // Start file download.
        download("adherents.csv", "http://193.52.94.171:5000/csv/generate");
      });
  };

  const handleDelete = async () => {
    await fetch("http://193.52.94.171:5000/api/deleteAllUsers", {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMessage(data.result);
        handleClose();
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1>Bonjour, administrateur </h1>
      <br />
      <Box display="flex" mb="50px" justifyContent="space-evenly">
        <ListUsers download={true} />
        <ListUsers download={false} />
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="success" onClick={handleExport}>
          Télécharger Excel
        </Button>
        <Button variant="contained" color="error" onClick={handleClickOpen}>
          EFFACER LA BASE DE DONNEES
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Etes vous sur de vouloir effacer la base de données ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Cela supprimera tous les adhérents de l'AS de la base de données. Ce
            bouton est prévu pour être utilisé une fois par an à la fin de
            l'année.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Non</Button>
          <Button onClick={handleDelete} autoFocus>
            Oui
          </Button>
        </DialogActions>
      </Dialog>
      {message != undefined && <h4>{message}</h4>}
    </div>
  );
};

export default AdminVue;
