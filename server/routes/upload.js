const router = require("express").Router();
const uploadController = require("../controllers/upload");

router.post("/postFile", uploadController.store);
// router.post("/getFile", uploadController.getFile);

module.exports = router;
