const PORT = 3000;
const express = require('express');
const routes = require('./routes.js');
const path = require('path');

const app = express();

app.use(express.urlencoded());
//require('./config/express.js')(app);
require('./config/handlebars.js')(app);

app.use('/static', express.static(path.join(__dirname, './static')));

app.use(routes);

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));