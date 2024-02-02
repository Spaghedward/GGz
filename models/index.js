const user = require('./user');
const games = require('./games');

User.hasMany(games, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

games.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { user, games };