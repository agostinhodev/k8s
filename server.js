import http from "http";
import os from "os";
const PORT = 3000;

http
  .createServer(function (req, res) {
    const hostName = os.hostname();

    const data = {
      hostName,
      date: new Date().toString(),
      host: req.headers.host,
    };

    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(data, null, 3));
  })
  .listen(PORT, function () {
    console.log(`server start at port ${PORT}`);
  });
