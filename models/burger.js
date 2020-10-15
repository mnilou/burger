// Inside burger.js, import config/orm.js into burger.js
const orm = require ('../config/orm.js');

// create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
    all: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: (newBurger, cb) => {
      orm.insertOne("burgers", newBurger, (res) => {
        cb(res);
      });
    },
    update: (burgerData, criteria, cb) => {
      orm.updateOne("burgers", burgerData, criteria, (res) => {
        cb(res);
      });
    },
    // delete: (condition, cb) => {
    //   orm.delete("burgers", condition, (res) => {
    //     cb(res);
    //   });
    // }
  };
  // Export the burger object at the end of the burger.js file.
  module.exports = burger;
  