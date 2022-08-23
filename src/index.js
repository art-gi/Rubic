const express = require('express');
const routes = require('./routes.js');
const path = require('path');

const config = require('./config/config.json')[process.env.NODE_ENV || "development"];

const app = express();

app.use(express.urlencoded());


//require('./config/express.js')(app);
require('./config/handlebars.js')(app);

app.use('/static', express.static(path.join(__dirname, './static')));

app.use(routes);

app.listen(config.PORT, console.log(`Server is listening on port ${config.PORT}`));