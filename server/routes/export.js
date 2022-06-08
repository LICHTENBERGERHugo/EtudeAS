const router = require("express").Router();
const exportUtil = require("../utils/exportcsv");
const downloadCertifUtil = require("../utils/downloadCertif");

router.get("/export", exportUtil.export);
router.get("/generate", exportUtil.generate);
router.get("/downloadCertif", downloadCertifUtil.downloadCertif);

module.exports = router;
