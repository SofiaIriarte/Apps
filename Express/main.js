

const express = require('express');
var bodyParser = require('body-parser');
var r1 = require('./routes/route1');

const app = express();

app.use(bodyParser.JSON());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user', (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-ontrol-Allow-Methods', 'GET, PUT, POST, DELETE');
    next();
});

app.user('/user', r1);

app.listen(3000, () => console.log('Hello Word Server ver. 1.0.0 instalado'));