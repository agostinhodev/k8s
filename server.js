import http from "http";

http
  .createServer(function (req, res) {
    const data = req.headers;

    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(data, null, 3));
  })
  .listen(80, function () {
    console.log("server start at port 80"); //the server object listens on port 80
  });
