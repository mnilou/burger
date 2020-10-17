const { query } = require("express");
// Import MySQL connection.
var connection = require("../config/connection");

// Object for all our SQL statement functions.
var orm = {
    // getting all burgers from DB
    getAll: function (cb) {
        connection.query("SELECT * FROM burgers;", function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // inserting new burger into DB
    createOne: function (cols, vals, cb) {
        var queryString = `INSERT INTO burgers(burger_name, devoured) VALUES ("`;
        queryString += vals // name of burger
        queryString += `", FALSE)`; // always making it falsey (uneaten)

        connection.query(queryString, function (err, result) {
            if (err) {
                throw (err);
            }
            cb(result);
        });
    },
    // updating a burger from fresh to devoured and vise versa
    updateOne: function (objColVals, condition, cb) {

        var queryString = "UPDATE burgers SET ";
        queryString += objColVals; // burger id
        queryString += " WHERE ";
        queryString += condition; // devoured or not

        connection.query(queryString, function (err, result) {
            if (err) {
                throw (err);
            }
            cb(result);
        });
    },
    // deleting burger from DB
    delete: function(condition, cb) {
        var queryString = "DELETE FROM burgers WHERE ";
        queryString += condition; // by id
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
};

// Export the orm object for the model.
module.exports = orm;