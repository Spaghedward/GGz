const router = require('express').Router();
const { Game } = require('../../models');
// const axios = require('axios');
const isAuth = require('../../utils/helpers');
require('dotenv').config();

router.post('/', async (req, res) => {
    try {
  
      const newGame = await Game.create({
        name: req.body.name,
        image: req.body.image,
        released: req.body.released,
        rating: req.body.rating,
        rawgId: req.body.rawgId,
      });
  
      res.status(201).json(newGame);
    } catch (err) {
      res.status(500).json({ err });
    }
  });
  

// router.get('/search', async (req, res) => {
//     try {
//         const headers = {
//             'Content-Type': 'application/json'
//         };

//         const response = await axios.get(`https://rawg.io/api/games?key=${process.env.APIKEY}&search=${req.query.search}&page_size=1`, { headers });
//         const games = response.data;

//         const newGame = await Game.create({
//             name: games.results[0].name,
//             screenshot: games.results[0].background_image,
//             released: games.results[0].released,
//             genre: games.results[0].genre[0],
//             rawgId: games.results[0].id,
//         });
//         res.render('games', { data: newGame });
//     } catch (err) {
//         res.status(500).json(err);
//     };

// });

// router.get('/genres', async (req, res) => {
//     try {
//         const headers = {
//             'Content-Type': 'application/json'
//         };

//         const response = await axios.get(`https://rawg.io/api/genres?key=${process.env.APIKEY}&page_size=12`, { headers });
//         const genres = response.data;
//         res.render('genres', { data: genres.results.[] });
        
//     } catch (err) {
//         res.status(500).json(err);
//     };
// });

// router.get('/popular', async (req, res) => {
//     try {
//         const headers = {
//             'Content-Type': 'application/json'
//         };

//         const popular = await axios.get(`https://rawg.io/api/collections/lists/popular?key=${process.env.APIKEY}&page_size=12`, { headers });
//         res.json(popular.data);
//     } catch (err) {
//         res.status(500).json(err);
//     };
// });

module.exports = router;