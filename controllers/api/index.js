const router = require('express').Router();

const userRoutes = require('./userRoutes');
const gamesRoutes = require('./gamesRoutes');

router.use('/games', gamesRoutes);
router.use('/users', userRoutes);
=======

module.exports = router;