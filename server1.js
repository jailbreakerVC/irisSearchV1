const express = require("express");
const request = require("request");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;
app.use(cors());

let requestOps = {
  url: ``,
  method: "GET",
};
//original
app.get("/api/:q", function (req, res) {
  requestOps.url = `http://localhost:1313/api/modules?_module=iris&query=${req.params.q}`;
  console.log(requestOps.url);
  request(requestOps, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

app.listen(port);
console.log("listening on port https://localhost/" + port);
