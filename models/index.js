const user = require('./user');
const game = require('./game');

user.belongsToMany(game, {
  through: {
    model: 'Like',
    unique: false,
  },
  as: 'likedGames',
  foreignKey: 'userId',
  constraints: false,
});

game.belongsToMany(user, {
  through: {
    model: 'Like',
    unique: false,
  },
  as: 'likingUsers',
  foreignKey: 'likeableId',
  constraints: false,
});

module.exports = { user, game };