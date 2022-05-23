const router = require("express").Router();
const exportUtil = require("../utils/exportcsv");

router.get("/export", exportUtil.export);
router.get("/generate", exportUtil.generate);

module.exports = router;
