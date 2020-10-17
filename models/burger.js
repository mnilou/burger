var orm = require("../config/orm");

var burger = {
    all: function (cb) {
        orm.getAll(function(result) {
            cb(result);
        });
    },
    create: function (cols, vals, cb) {
        orm.createOne(cols, vals, function(result) {
            cb(result);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne(objColVals, condition, function(result) {
            cb(result);
        });
    },
    delete: function(condition, cb) {
        orm.delete(condition, function(res) {
          cb(res);
        });
      }
};

module.exports = burger;