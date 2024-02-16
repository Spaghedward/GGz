const User = require('./user');
const Game = require('./game');
const Like = require('./Like')

User.belongsToMany(Game, {
  through: {
    model: 'like',
    unique: false,
  },
  as: 'likedGames',
  foreignKey: 'userid',
  constraints: false,
});

Game.belongsToMany(User, {
  through: {
    model: 'like',
    unique: false,
  },
  as: 'likingUsers',
  foreignKey: 'gameid',
  constraints: false,
});

module.exports = { User, Game, Like };