const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('home', {
        layout: 'home',
        title: 'Collector\'s Trading Platform | Home'
    });
});

module.exports = router;