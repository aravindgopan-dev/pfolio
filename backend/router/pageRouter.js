const express = require("express");
const router = express.Router();
const { details,getDetails } = require("../controller/pageController");
const authmiddleware=require("../middleware/authMiddleware")

router.post("/data",getDetails)
router.post("/",authmiddleware,details);

module.exports = router;
