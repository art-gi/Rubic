function hbs(app) {
    const { engine } = require('express-handlebars');

    app.engine('.hbs', engine({ extname: '.hbs' }));
    app.set('views', './views');
    app.set('view engine', '.hbs');
};
module.exports = hbs;