const router = require('express').Router();
const { Game, Like, User } = require('../../models');
const isAuth = require('../../utils/helpers');
require('dotenv').config();

router.post('/:id', isAuth, async (req, res) => {
    try {
        const { id } = req.params; 
        const userId = req.session.userId 
    
        const game = await Game.findByPk(id);
        const user = await User.findByPk(userId);
    
        if (!game || !user) {
          return res.status(404).json({ error: 'Game or user not found' });
        }
    
        const like = await Like.create({
          userId: user.id,
          gameId: game.id,
        });
    
        return res.status(201).json(like);
      } catch (err) {
        res.status(500).json(err);
      }
    });
    
module.exports = router;