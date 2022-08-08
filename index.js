const PORT = 3000;
const express = require('express');
const path = require('path');

const { engine } = require('express-handlebars');

const homeController = require('./controllers/homeController.js');
const aboutController = require('./controllers/aboutController.js');
const addCubeController = require('./controllers/addCubeController.js')

const app = express();
const router = express.Router();

app.use('/static', express.static(path.join(__dirname, './static')));

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('views', './views');
app.set('view engine', '.hbs');

app.use(homeController);
app.use(aboutController);
app.use(addCubeController);


app.listen(PORT, console.log(`Server is listening on port ${PORT}`));