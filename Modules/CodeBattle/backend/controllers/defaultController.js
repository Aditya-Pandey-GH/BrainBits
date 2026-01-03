const express = require("express");
const app = express();
app.use(express.json());

app.post("/", (req, res) => {
	try {
		console.log(req.body.msg);
		res.json({ message: "Hello World" });
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = app;
