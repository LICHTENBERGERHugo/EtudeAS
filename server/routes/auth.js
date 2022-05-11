const router = require("express").Router();
const authController = require("../controllers/auth");

// écoute la méthode post et la route /register
router.post("/create", authController.register);
router.post("/getUser", authController.login);

module.exports = router;
