const router = require('express').Router();

function cubeDetailsRender(req, res) {

    res.render('details', {cubes})
}

router.get('/:cubeId', cubeDetailsRender);

module.exports = router;