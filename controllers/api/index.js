const router = require('express').Router();
const userRoutes = require('./gamesRoutes');
const projectRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/games', gamesRoutes);

module.exports = router;