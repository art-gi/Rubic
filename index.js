const PORT = 3000;
const express = require('express');
const path = require('path');

const { engine } = require('express-handlebars');
const app = express();

app.use('/static', express.static(path.join(__dirname, './static')));

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('views', './views');
app.set('view engine', '.hbs');



app.get('/', (req, res) => {
    res.render('index');

})

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));