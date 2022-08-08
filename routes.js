const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js');

router.use(homeController);
router.use(cubeController);

module.exports = router;
