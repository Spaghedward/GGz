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
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: "user" },
            unique: 'unique_constraint',
        },
        gameId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: "game" },
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
                fields: ['userId', 'gameId'],
            },
        },
    }
);

module.exports = Like;