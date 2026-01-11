const http = require("http");

http
  .createServer((req, res) => {
    res.end("Backend alive");
  })
  .listen(5000, () => {
    console.log("TEST SERVER RUNNING ON 5000");
  });
