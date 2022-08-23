const cubeService = require('../services/cubeService.js');

const router = require('express').Router();

function homeController(req, res) {

    let cubes = cubeService.getAll();

    res.render('index', { cubes });
};

function search(req, res) {
    let { search, from, to } = req.query;
    let cubes = cubeService.search(search, from, to);
    res.render('index', {
        title: 'Search',
        cubes})
}
router.get('/', homeController);
router.get('/search', search);

module.exports = router;