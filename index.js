const PORT = 3000;
const express = require('express');
const path = require('path');



const homeController = require('./controllers/homeController.js');
const aboutController = require('./controllers/aboutController.js');
const addCubeController = require('./controllers/addCubeController.js');
const cubeDetailsRender = require('./controllers/detailsController.js');

const app = express();
require('./config/handlebars.js')(app);
const router = express.Router();

app.use('/static', express.static(path.join(__dirname, './static')));


app.use(homeController);
app.use(aboutController);
app.use(addCubeController);
app.use(cubeDetailsRender);


app.listen(PORT, console.log(`Server is listening on port ${PORT}`));