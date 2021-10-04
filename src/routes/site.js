const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/siteController");

router.use("/search", siteController.search);

// /news/ path news đã được định nghĩa ở bên ngoài, đây là tuyến đường đầu tiên.
router.use("/", siteController.home);

module.exports = router;
