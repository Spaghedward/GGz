const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class games extends Model {}

games.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      screenshots_count: {
        type: DataTypes.INTEGER[1],
        allowNull: false,
     },
     released: {
        type: DataTypes.STRING,
        allowNull: false,
     },
     genre: {
        type: DataTypes.STRING,
        allowNull: false,

     }
    },
);

module.exports = games;