const path = require('path');

function hbs(app) {
    const { engine } = require('express-handlebars');

    app.engine('.hbs', engine({ extname: '.hbs' }));
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', '.hbs');
};
module.exports = hbs;