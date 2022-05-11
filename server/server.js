// Importe le paquet express
const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

// Crée une application express
const app = express();
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MYSQL connected...");
  }
});

const PORT = 5000;

//Parse URL-encoded bodies (as sent by HTML form)
app.use(express.urlencoded({ extended: false }));

//Parse JSON bodies (as sent by API clients)
app.use(express.json());

//Define routes
app.use("/auth", require("./routes/auth"));

// Démarrer le serveur et écouter un port donné
app.listen(PORT, () => {
  console.log(`Server started on : http://localhost:${PORT}`);
});
