'use strict';

const express = require('express');
const router = require('./routes');
const app = express();
const PORT = process.env.PORT || 8042;
const indexRouter = require('./routes/index');
const carsRouter = require('./routes/cars');

app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/', carsRouter);


//app.get('/', (req, res) => {

//    fs.readFile('public/app.html', (err, data) => {
//        res.setHeader('Content-Type', 'text/html');
//        res.send(data);
//    });

//});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});