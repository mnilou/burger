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
    update: (burgerData, criteria, bb) => {
      orm.updateOne("burgers", burgerData, criteria, (res) => {
        bb(res);
      });
    },
  
    // Add a delete method which uses the `orm.deleteOne` method.
    // ... CODE HERE ...
    
  };
  // Export the burger object at the end of the burger.js file.
  module.exports = burger;
  