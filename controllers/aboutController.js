const router = require('express').Router();

function renderAbout(req, res) {

    res.render('about');
}

router.get('/about', renderAbout);

module.exports = router;