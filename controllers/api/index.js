const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gamesRoutes = require('./gamesRoutes');

router.use('/users', userRoutes);
router.use('/games', gamesRoutes);

module.exports = router;