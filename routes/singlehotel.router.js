const express = require("express");
const singleHotelHandler = require("../controller/singlehotelController");
const router = express.Router();



router.route("/:id")
    .get(singleHotelHandler)

    module.exports = router;