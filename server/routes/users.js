const router = require("express").Router();
const usersController = require("../controllers/users");

router.get("/getAllFiles", usersController.getAllFilesNonValid);
router.get("/getAllPayments", usersController.getAllPaymentNonValid);
router.get("/getUserFile", usersController.getUserFile);
router.put("/updateUsersFiles", usersController.updateUsersFiles);
router.put("/updateUsersPayments", usersController.updateUsersPayments);
router.put("/refuseUsersFiles", usersController.refuseUsersFiles);
router.delete("/deleteAllUsers", usersController.deleteAllUsers);

module.exports = router;
