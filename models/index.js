const user = require('./user');
const games = require('./Games');


user.belongsToMany(games, {
  through: {
    model: 'Like',
    unique: false,
  },
  as: 'likedGames',
  foreignKey: 'userId',
  constraints: false,
});

games.belongsToMany(user, {
  through: {
    model: 'Like',
    unique: false,
  },
  as: 'likingUsers',
  foreignKey: 'likeableId',
  constraints: false,
});

module.exports = { user, games };