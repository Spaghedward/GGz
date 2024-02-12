const router = require('express').Router();
const { Like, Games, User } = require('../models');
const axios = require('axios');
require('dotenv').config();


router.get('/', async (req, res) => {
  try {
    const headers = {
        'Content-Type': 'application/json'
    };

    const games = await axios.get(`https://rawg.io/api/games?key=${process.env.APIKEY}&page_size=12`, { headers });
    res.render('main', { data: games.data });
} catch (err) {
    res.status(500).json(err);
};
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/profile', isAuth, async (req, res) => {
    try {
        const userId = req.session.userId;
    
        if (!userId) {
          res.render('main')
        };

        const user = await User.findbyPk(userId);
        
        const likedGames = await Like.findAll({
          where: { userId },
          include: [{ model: Games, attributes: ['id', 'name', 'screenshot', 'genre', 'released'] }],
        });
    
        const games = likedGames.map(like => like.game);
    
        res.render('profile', {user: user.name, likedGames: games});
      } catch (err) {
        res.render('404');
      }
});

router.get('/support', (req, res) => {
    res.render('support');
});

module.exports = router;