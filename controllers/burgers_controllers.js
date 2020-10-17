const express = require("express");

const router = express.Router();

// importing model to use database functions
const burger = require("../models/burger.js");

// GET request
router.get("/", function (req, res) {
    // putting our data from DB into our burger.all model
    burger.all(function (data) {
        // puting new data in hbsObject
        let hbsObject = {
            burgers: data
        };
        // rendering index page with hbsObject
        res.render("index", hbsObject);
    });

});

// POST request
router.post("/api/burgers", function (req, res) {
    // posting data from burger.create into DB
    burger.create("burger_name", req.body.name, function (result) {
        // adding ID
        res.json({ id: result.insertId })
    });
});

// PUT request
router.put("/api/burgers/:id", function (req, res) {
    // identifying burger by id
    let condition = "id = " + req.params.id;
    // setting whether it is devoured or not
    let devoured = " devoured = " + req.body.devoured;

    // updating burger in server
    burger.update(devoured, condition, function (result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    }
    )
});

// DELETE request
router.delete("/api/burgers/:id", function (req, res) {
    // getting id from req
    var condition = "id = " + req.params.id;
    // removing it from our DB
    burger.delete(condition, function (result) {
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