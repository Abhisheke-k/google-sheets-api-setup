const getGoogleSheetsClient = require("../config/googleCredentials");
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

async function readSheet(range) {
  const sheets = await getGoogleSheetsClient(); // Get authenticated Sheets client
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range,
  });
  return response.data.values;
}

async function writeSheet(range, values) {
  const sheets = await getGoogleSheetsClient(); // Get authenticated Sheets client
  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range,
    valueInputOption: "RAW",
    requestBody: { values },
  });
  return { message: "✅ Data written successfully!" };
}

module.exports = { readSheet, writeSheet };
