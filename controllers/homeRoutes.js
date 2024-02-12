const router = require('express').Router();
const { Like, Games, User } = require('../models');
const axios = require('axios');
const isAuth = require('../utils/helpers');
require('dotenv').config();


router.get('/', async (req, res) => {
  try {
    const headers = {
        'Content-Type': 'application/json'
    };

    const response = await axios.get(`https://rawg.io/api/games?key=${process.env.APIKEY}&page_size=15`, { headers });
    const games = response.data 
    res.render('logos', { games });
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
          res.redirect('logos')
        };

        const user = await User.findbyPk(userId);
        
        const likedGames = await Like.findAll({
          where: { userId },
          include: [{ model: Game, attributes: ['id', 'name', 'screenshot', 'genre', 'released', 'rawgId'] }],
        });
    
        const games = likedGames.map(like => like.game);
    
        res.render('profiles', {user: user.name, likedGames: games});
      } catch (err) {
        res.render('404');
      }
});

router.get('/support', (req, res) => {
    res.render('support');
});

module.exports = router;