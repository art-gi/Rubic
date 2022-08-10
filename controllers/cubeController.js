const router = require('express').Router();

const cubeService = require('../services/cubeService.js');

function aboutRender(req, res) {

    res.render('about');
};

function cubeRender(req, res) {
    
    res.render('create');
};

function createCube(req, res) {

    let {name, description, imageUrl, level} = req.body;
    cubeService.create(name, description, imageUrl, level)

    res.redirect('/');
}

router.get('/about', aboutRender);
router.get('/create', cubeRender);
router.post('/create', createCube);

module.exports = router;