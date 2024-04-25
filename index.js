const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/")
    res.end("<h1>This is code with pankaj</h1><p>rocking the world</p>");
  else if (req.url == "/test") res.end("<h1>this is test url</h1>");
  else res.end("<h1>page not found</h1>");
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
