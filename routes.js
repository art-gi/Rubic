const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js');
const detailsController = require('./controllers/detailsController.js')
const notFound = require('./controllers/notFoundController.js');

router.use(homeController);
router.use(cubeController);
router.use(detailsController)
router.get('*', notFound);

module.exports = router;
