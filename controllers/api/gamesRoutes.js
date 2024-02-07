const router = require('express').Router();
// const { USER, GAMES } = require('../models')
const axios = require('axios');
require('dotenv').config();

router.get('/', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };

        const data = await axios.get(`https://rawg.io/api/games?key=${process.env.APIKEY}&page=1`, { headers });
        res.json(data.data);
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/search', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };

        const data = await axios.get(`https://rawg.io/api/games?key=${process.env.APIKEY}&search=${req.body.search}&page=1`, { headers });
        res.json(data.data);
    } catch (err) {
        res.status(500).json(err);
    };

});

router.get('/genres', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };

        const data = await axios.get(`https://rawg.io/api/genres?key=${process.env.APIKEY}&page=1`, { headers });
        res.json(data.data);
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/popular', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };

        const data = await axios.get(`https://rawg.io/api/collections/lists/popular?key=${process.env.APIKEY}&page=1&page_size=12`, { headers });
        res.json(data.data);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;