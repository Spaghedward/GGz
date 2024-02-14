const user = require('./user');
const game = require('./game');

// user.belongsToMany(game, {
//   through: {
//     model: 'like',
//     unique: false,
//   },
//   as: 'likedGames',
//   foreignKey: 'userId',
//   constraints: false,
// });

// game.belongsToMany(user, {
//   through: {
//     model: 'like',
//     unique: false,
//   },
//   as: 'likingUsers',
//   // foreignKey: ,
//   constraints: false,
// });

module.exports = { user, game };