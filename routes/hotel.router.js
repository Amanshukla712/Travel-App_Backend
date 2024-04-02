const express = require("express");
const hotelHandler = require("../controller/hotelController");
const router = express.Router();


router.route("/")
    .get(hotelHandler)

module.exports = router;