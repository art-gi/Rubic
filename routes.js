const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js');
const notFound = require('./controllers/notFoundController.js');

router.use(homeController);
router.use(cubeController);
router.get('*', notFound);

module.exports = router;
