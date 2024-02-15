const router = require('express').Router();


const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');
const likeRoutes = require('./likeRoutes');

router.use('/games', gameRoutes);
router.use('/user', userRoutes);
router.use('/like', likeRoutes);

module.exports = router;