const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();

const defaultController = require("./controllers/defaultController");

app.use("/", defaultController);

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`http://127.0.0.1:${port}`);
});
