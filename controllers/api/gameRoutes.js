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



module.exports = router;