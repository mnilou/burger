var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and giving server access to them
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

// starting server
app.listen(PORT, function() {
  // Log when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});