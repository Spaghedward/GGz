const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Like extends Model { }

Like.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: "user", key: "id" },
            unique: 'unique_constraint',
        },
        game_Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: "game", key: "id" },
            unique: 'unique_constraint',
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'like',
        uniqueKeys: {
            unique_constraint: {
                fields: ['user_Id', 'game_Id'],
            },
        },
    }
);

module.exports = Like;