require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sheetsRoutes = require("./routes/sheetsRoutes");

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());


app.use("/api/sheets", sheetsRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
