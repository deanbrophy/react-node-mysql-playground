'use strict';
module.exports = (sequelize, DataTypes) => {
  var Campaigns = sequelize.define('Campaigns', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Campaigns.associate = function(models) {
    // associations can be defined here
  };
  return Campaigns;
};