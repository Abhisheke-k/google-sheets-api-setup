const { readSheet, writeSheet } = require("../services/googleSheetsService");

// Get Data from Google Sheets
const getSheetData = async (req, res) => {
  try {
    const data = await readSheet("Sheet1!A1:C10"); // Change range as needed
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Add Data to Google Sheets
const addSheetData = async (req, res) => {
  try {
    const { values } = req.body; // Expecting an array of arrays
    await writeSheet("Sheet1!A1", values);
    res.json({ success: true, message: "Data added successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { getSheetData, addSheetData };
