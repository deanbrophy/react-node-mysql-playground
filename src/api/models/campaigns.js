'use strict';

const Sequelize = require('sequelize');
const { data} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  var Campaigns = sequelize.define('Campaigns', {
    id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    createdAt: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
    updatedAt: {type: Sequelize.DATE, defaultValue: Sequelize.NOW}

  }, {});
  Campaigns.associate = function(models) {
    // associations can be defined here
  };
  return Campaigns;
};