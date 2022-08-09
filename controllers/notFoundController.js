const router = require('express').Router();
function notFound(req, res) {

    res.render('404');
}
router.use(notFound);
module.exports = router;