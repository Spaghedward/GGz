const User = require('./user');
const Game = require('./game');
const Like = require('./like')

user.belongsToMany(game, {
  through: {
    model: 'like',
    unique: false,
  },
  as: 'likedGames',
  foreignKey: 'userId',
  constraints: false,
});

game.belongsToMany(user, {
  through: {
    model: 'like',
    unique: false,
  },
  as: 'likingUsers',
  foreignKey: 'gameId',
  constraints: false,
});

module.exports = { User, Game, Like };