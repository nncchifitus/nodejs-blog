const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewsController");

router.use("/:slug", newsController.show);

// /news/ path news đã được định nghĩa ở bên ngoài, đây là tuyến đường đầu tiên.
router.use("/", newsController.index);

module.exports = router;
