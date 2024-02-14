const router = require('express').Router();
const { Like, Game, User } = require('../models');
const axios = require('axios');
// const isAuth = require('../utils/helpers');
require('dotenv').config();


router.get('/', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };

        const games = await axios.get(`https://rawg.io/api/games?key=${process.env.APIKEY}&page_size=12`, { headers });
        const gameslist = games.data.results;
    

        const createGames = gameslist.map(data => ({
            name: data.name,
            image: data.background_image,
            released: data.released,
            rating: data.rating,
            rawgId: data.id,
        }));

        console.log(createGames);

        await Game.bulkCreate(createGames);

        // await Game.create(
        //     {
        //         name: 'Grand Theft Auto V',
        //         image: 'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
        //         released: '2013-09-17',
        //         rating: 4.47,
        //         rawgId: 3498
        //       }
        // );

        res.render('logos', { gameslist });

    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/login', (req, res) => {
    if (isAuth) {
        res.redirect('profiles');
    }
    res.render('login');
});

router.get('/profiles', async (req, res) => {
    try {
        const userId = req.session.userId;

        if (!userId) {
            res.redirect('logos')
        };

        const user = await User.findbyPk(userId);

        const likedGames = await Like.findAll({
            where: { userId },
            include: [{ model: Game, attributes: ['id', 'name', 'image', 'rating', 'released', 'rawgId'] }],
        });

        const games = likedGames.map(like => like.game);

        res.render('profiles', { user: user.name, likedGames: games });
    } catch (err) {
        res.render('404');
    }
});

router.get('/support', (req, res) => {
    res.render('support');
});

router.get('/games', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };

        const games = await axios.get(`https://rawg.io/api/games?key=${process.env.APIKEY}&page_size=12`, { headers });
        const gameslist = games.data.results;
        console.log(gameslist);
        // res.json(gameslist);
        res.render('logos', { gameslist });
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/search', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };

        const response = await axios.get(`https://rawg.io/api/games?key=${process.env.APIKEY}&search=${req.query.search}&page_size=1`, { headers });
        const games = response.data.results;

        await Game.create(games.map(data => ({
            name: data.name,
            image: data.background_image,
            released: data.released,
            rating: data.rating,
            rawgId: data.id,
        })));

        console.log('Games saved');

        res.render('games', { data: games });
    } catch (err) {
        res.status(500).json(err);
    };

});

module.exports = router;