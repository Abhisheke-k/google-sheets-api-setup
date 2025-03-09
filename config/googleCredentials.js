require("./dotenvConfig"); // Load .env
const { google } = require("googleapis");

const googleCredentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"), // Fix newline issue
};

async function getGoogleSheetsClient() {
  try {
    const auth = new google.auth.JWT(
      googleCredentials.client_email,
      null,
      googleCredentials.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const sheets = google.sheets({ version: "v4", auth });

    console.log("✅ Google Sheets API Client Initialized");
    return sheets;
  } catch (error) {
    console.error("❌ Error initializing Google Sheets API:", error);
  }
}

module.exports = getGoogleSheetsClient;
