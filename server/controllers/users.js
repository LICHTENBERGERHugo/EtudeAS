const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});

module.exports.getAllFilesNonValid = (req, res) => {
  db.query(
    "SELECT nom,prenom,mail FROM adherents WHERE filevalid=0 AND filename IS NOT NULL AND role='user'  ",
    async (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
};

module.exports.getAllPaymentNonValid = (req, res) => {
  db.query(
    "SELECT nom,prenom,mail FROM adherents WHERE paymentvalid=0",
    async (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
};

module.exports.getUserFile = (req, res) => {
  console.log(req.query);
  db.query(
    "SELECT filename FROM adherents WHERE mail=?",
    [req.query.mail],
    async (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
};

module.exports.updateUsersFiles = (req, res) => {
  const checked = req.body.checked;
  console.log("\n Receiving something ... \n");
  console.log(checked + " received");

  let query = "";
  checked.forEach((mail) => {
    query += mysql.format(
      "UPDATE adherents SET filevalid='2' WHERE mail= ? ; ",
      [mail]
    );
  });

  db.query(query, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports.refuseUsersFiles = (req, res) => {
  const checked = req.body.checked;
  console.log("\n Receiving something ... \n");
  console.log(checked + " received");

  let query = "";
  checked.forEach((mail) => {
    query += mysql.format(
      "UPDATE adherents SET filevalid='1' WHERE mail= ? ; ",
      [mail]
    );
  });

  db.query(query, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports.updateUsersPayments = (req, res) => {
  const checked = req.body.checked;
  console.log("\n Receiving something ... \n");
  console.log(checked + " received");

  let query = "";
  checked.forEach((mail) => {
    query += mysql.format(
      "UPDATE adherents SET paymentvalid='1' WHERE mail= ? ; ",
      [mail]
    );
  });

  db.query(query, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports.deleteAllUsers = (req, res) => {
  db.query("DELETE FROM adherents WHERE role='user'", async (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.status(200).send({ result: "La base de données a été effacée." });
    }
  });
};
