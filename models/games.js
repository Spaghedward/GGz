const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Games extends Model { }

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
        type: DataTypes.INTEGER,
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
{
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'games',
}


module.exports = Games;