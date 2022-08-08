const router = require('express').Router();
function aboutRender(req, res) {
    
    res.render('about');
};

function cubeRender(req, res) {
    res.render('create');
};

router.get('/about', aboutRender);
router.get('/create', cubeRender);

module.exports = router;