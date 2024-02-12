const router = require('express').Router();


const userRoutes = require('./userRoutes');
const gamesRoutes = require('./gamesRoutes');
const likeRoutes = require('./likeRoutes');

router.use('/games', gamesRoutes);
router.use('/user', userRoutes);
router.use('/like', likeRoutes);

module.exports = router;