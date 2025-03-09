const express = require("express");
const { getSheetData, addSheetData } = require("../controllers/sheetsController");

const router = express.Router();

router.get("/read", getSheetData);
router.post("/write", addSheetData);

module.exports = router;
