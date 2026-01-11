const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

console.log("1️⃣ server.js started");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

console.log("2️⃣ HTTP server created");

const io = new Server(server, {
  cors: { origin: "*" }
});

console.log("3️⃣ Socket.IO initialized");

try {
  require("./socket")(io);
  console.log("4️⃣ socket.js loaded");
} catch (err) {
  console.error("❌ socket.js error:", err);
}

app.get("/", (req, res) => {
  res.send("Backend OK");
});

server.listen(5000, () => {
  console.log("5️⃣ Backend running on port 5000");
});
