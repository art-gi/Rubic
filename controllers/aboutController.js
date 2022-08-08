const router = require('express').Router;

function aboutRender(req, res) {
    
    res.render('about');
};

router.get('/about', aboutRender);

module.exports = router;
