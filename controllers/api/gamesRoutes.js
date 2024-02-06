const router = require('express').Router();
const { USER, GAMES } = require('../models')
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'token': process.env.APIKEY,

        };

        const data = await axios.get('https://rawg.io/api/games?page=1', { headers });
        res.json(data.data);
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/search', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'token': process.env.APIKEY,
        };

        const data = await axios.get(`https://rawg.io/api/games/${req.body.search}/suggested?page=1`, { headers });
        res.json(data.data);
    } catch (err) {
        res.status(500).json(err);
    };

});

router.get('/genres', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'token': process.env.APIKEY,

        };

        const data = await axios.get('https://rawg.io/api/genres?page=1', { headers });
        res.json(data.data);
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/popular', async (req, res) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'token': process.env.APIKEY,

        };

        const data = await axios.get('https://rawg.io/api/collections/lists/popular?page=1&page_size=12', { headers });
        res.json(data.data);
    } catch (err) {
        res.status(500).json(err);
    };
});