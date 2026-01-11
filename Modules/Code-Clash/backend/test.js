require("http")
  .createServer((req, res) => {
    res.end("Server OK");
  })
  .listen(5000, () => console.log("Test server on 5000"));
