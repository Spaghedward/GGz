const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});

router.get('/support', (req, res) => {
    res.render('support');
});

module.exports = router;