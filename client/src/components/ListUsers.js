import React, { useEffect, useState } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, Grid, Typography } from "@mui/material";

const ListUsers = (props) => {
  const [checked, setChecked] = useState([]);
  const [users, setUsers] = useState([]);

  let URLGet = "";
  if (props.download) {
    URLGet = "http://localhost:5000/api/getAllFiles";
  } else {
    URLGet = "http://localhost:5000/api/getAllPAyments";
  }

  let URLPutValidate = "";
  if (props.download) {
    URLPutValidate = "http://localhost:5000/api/updateUsersFiles";
  } else {
    URLPutValidate = "http://localhost:5000/api/updateUsersPayments";
  }

  let URLPutRefuse = "";
  if (props.download) {
    URLPutRefuse = "http://localhost:5000/api/refuseUsersFiles";
  }

  function download(filename, text, requestParam) {
    var element = document.createElement("a");
    element.setAttribute("href", text + requestParam);
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  const submitValidate = async () => {
    console.log("submitValidate running ...");
    console.log("sending : " + JSON.stringify({ checked }));
    await fetch(URLPutValidate, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checked }),
    })
      .then((res) => {
        setChecked([]);
        setUsers([]);
        fetchUsers();
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  const submitRefuse = async () => {
    console.log("submitRefuse running ...");
    console.log("sending : " + JSON.stringify({ checked }));
    await fetch(URLPutRefuse, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checked }),
    })
      .then((res) => {
        setChecked([]);
        setUsers([]);
        fetchUsers();
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const fetchUsers = async () => {
    await fetch(URLGet, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  const handleDownload = async (mail) => {
    console.log(mail);
    await fetch("http://localhost:5000/api/getUserFile?mail=" + mail, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data[0].filename);
        download(
          data.filename + "Certif",
          "http://localhost:5000/download/downloadCertif?filename=",
          data[0].filename
        );
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Grid mr="20%">
        {props.download ? (
          <Typography>Liste des certificats à valider</Typography>
        ) : (
          <Typography>Liste des paiements à valider</Typography>
        )}
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            maxHeight: 300,
            overflowY: "auto",
            bgcolor: "background.paper",
          }}
        >
          {users.map((value, index) => {
            const labelId = `checkbox-list-label-${index}`;

            return (
              <ListItem
                key={index}
                secondaryAction={
                  props.download && (
                    <IconButton
                      edge="end"
                      aria-label="comments"
                      onClick={() => {
                        handleDownload(value.mail);
                      }}
                    >
                      <DownloadIcon />
                    </IconButton>
                  )
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value.mail)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value.mail) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={value.prenom + " " + value.nom}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        {props.download && (
          <Button variant="contained" onClick={submitRefuse}>
            Refuser
          </Button>
        )}
        <Button variant="contained" onClick={submitValidate}>
          Valider
        </Button>
      </Grid>
    </>
  );
};

export default ListUsers;
