const PORT = 3000;
const express = require('express');
const app = express();

app.use('/static', express.static('./static'));

app.get('/', (req, res) => {
    res.status(200).write('views/index');
    res.end();
   
})

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));