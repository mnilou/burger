const express = require("express");

// Import the model (burger.js) to use its database functions.
const burgers = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burgers.create({ name: req.body.name, devoured: req.body.devoured }, (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// using put to replace the value of devoured for a
// specific burger resource
router.put("/api/burgers/:id/devoured", (req, res) => {
  const condition = { id: req.params.id };
  const update = { devoured: req.body.value };

  burgers.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were affected, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });

  // DELETE request
router.delete("/api/burgers/:id", function (req, res) {
  // getting id from req
  const condition = "id = " + req.params.id;
  // removing it from our DB
  burgers.delete(condition, function (result) {
      if (result.affectedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
      } else {
          res.status(200).end();
      }
  });
});

// Export routes for server.js to use.
module.exports = router;
