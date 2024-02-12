const router = require('express').Router();
const { Game } = require('../../models')
const axios = require('axios');
const isAuth = require('../../utils/helpers');
require('dotenv').config();

router.get('/', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };

        const games = await axios.get(`https://rawg.io/api/games?key=${process.env.APIKEY}&page_size=12`, { headers });
        res.render('games', { data: games.data });
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/search', isAuth, async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };

        const data = await axios.get(`https://rawg.io/api/games?key=${process.env.APIKEY}&search=${req.query.search}&page_size=1`, { headers });
        const game = data.data.results[0];

        const newGame = await Game.create({
            name: game.name,
            screenshot: game.background_image,
            released: game.released,
            genre: game.genre[0],
            rawgId: game.id,
        });
        res.render('whatever', { data: newGame });
    } catch (err) {
        res.status(500).json(err);
    };

});

router.get('/genres', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };

        const genres = await axios.get(`https://rawg.io/api/genres?key=${process.env.APIKEY}&page_size=12`, { headers });
        res.render('whatever', { data: genres.data });
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/popular', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };

        const popular = await axios.get(`https://rawg.io/api/collections/lists/popular?key=${process.env.APIKEY}&page_size=12`, { headers });
        res.render('whatever', { data: popular.data });
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;