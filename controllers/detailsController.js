const router = require('express').Router();

function cubeDetailsRender(req, res) {

    res.render('details')
}

router.get('/details/:cubeId', cubeDetailsRender);

module.exports = router;