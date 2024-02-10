const router = require('express').Router();
const { Like, Games } = require('../models');


router.get('/', (req, res) => {
    res.render('main');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/profile', async (req, res) => {
    try {
        const userId = req.session.userId;
    
        if (!userId) {
          res.render('main')
        };
    
        
        const likedGames = await Like.findAll({
          where: { userId },
          include: [{ model: Games, attributes: ['id', 'name', 'screenshot', 'genre'] }],
        });
    
        const games = likedGames.map(like => like.game);
    
        res.render('profile', {userId, likedGames: games});
      } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
});

router.get('/support', (req, res) => {
    res.render('support');
});

module.exports = router;