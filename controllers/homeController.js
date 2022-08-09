const cubeService = require('../services/cubeService.js');

const router = require('express').Router();

function homeController(req, res) {

    let cubes = cubeService.getAll();

    res.render('index', {cubes});
};

router.get('/', homeController);

module.exports = router;