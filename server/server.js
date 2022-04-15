// Importe le paquet express
const express = require("express");

// Crée une application express
const app = express();

const PORT = 5000;

// Ecoute la méthode get et la route '/api'
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Démarrer le serveur et écouter un port donné
app.listen(PORT, () => {
  console.log(`Server started on : http://localhost:${PORT}`);
});
