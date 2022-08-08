const PORT = 3000;
const express = require('express');
const routes = require('./routes.js');
const path = require('path');

const detailsController = require('./controllers/detailsController.js')

const app = express();
require('./config/express.js')(app);
require('./config/handlebars.js')(app);

app.use('/static', express.static(path.join(__dirname, './static')));

app.use(routes);
app.use('/details', detailsController)

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));