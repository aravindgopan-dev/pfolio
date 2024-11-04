const express = require("express");
const router = express.Router();
const { details } = require("../controller/pageController");

router.post("/",details);

module.exports = router;
