'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comments', {
    name: DataTypes.STRING,
    comment: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Comment;
};