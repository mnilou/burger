const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const routes = require('./controllers/burgerController.js');
const connection = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 8080;
// Serve static content for the app from the "public" directory in the
// application directory.
app.use(express.static('public'));

// Parse application body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set Handlebars
app.engine(
  'handlebars',
  exphbs({ defaultLayout: "main" })
);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  connection.query('SELECT * FROM ?', (err, burgersData) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.render('index', {burgers: burgersData});
    }
  });
});

// Import routes and give the server access to them.
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on port ${PORT}`);
});
