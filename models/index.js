const User = require('./user');
const Game = require('./game');
const Like = require('./like')

User.belongsToMany(Game, {
    through: {
        model: 'like',
    },
    as: 'likedGames',
    constraints: false,
});

Game.belongsToMany(User, {
    through: {
        model: 'like',
    },
    as: 'likingUsers',
    constraints: false,
});

module.exports = { User, Game, Like };