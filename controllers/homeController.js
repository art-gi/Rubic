const router = require('express').Router();

function homeController(req, res) {
    
    res.render('index');
};

router.get('/', homeController);

module.exports = router;