// Import MySQL connection.
const mysql = require('mysql');
const connection = require('../config/connection.js');

// Object for all our SQL statement functions.
const orm = {
  selectAll: (tableInput, cb) => {
    const queryString = 'SELECT * FROM ??';
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) {
        cb(err);
      }
      cb(result);
    });
  },
  insertOne: (table, newRowData, cb) => {
    const queryString = 'INSERT INTO ?? SET ?';
    const values = [table, newRowData];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        cb(err);
      }
      return cb(result);
    });
  },

  updateOne: (table, updateValues, condition, cb) => {
    const queryString = 'UPDATE ?? SET ? WHERE ?';
    const values = [table, updateValues, condition];

    console.log(queryString);
    connection.query(queryString, values, (err, result) => {
      if (err) {
        cb(err);
      }
      return cb(result);
    });
  },

};

// Export the orm object
module.exports = orm;
