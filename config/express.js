function express(app) {
    const express = require('express');
    const path = require('path');

    app.use('/static', express.static(path.join(__dirname, './static')));

}
module.exports = express;