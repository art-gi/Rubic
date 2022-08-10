const router = require('express').Router();
const cubeService = require('../services/cubeService.js');

function cubeDetailsRender(req, res) {
    console.log(req.params)
    let cube = cubeService.getOne(req.params.cubeId)
        res.render('details', { cube })
}

router.get('/details/:cubeId', cubeDetailsRender);

module.exports = router;