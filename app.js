// Require Express
const express = require("express");

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// our first route:
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

// cat route:
app.get("/cat", (req, res, next) => {
  res.sendFile(__dirname + "/views/cat-page.html");
});

// Server Started
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
