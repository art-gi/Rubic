const router = require('express').Router();

function addCubeRender(req, res) {
    
    res.render('create');
};
router.get('/create', addCubeRender);

module.exports = router;