const user = require('./user');
const games = require('./games');

user.hasMany(games, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

games.belongsTo(user, {
  foreignKey: 'user_id'
});

module.exports = { user, games };