

const express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.get('/', (req, res) => {
    console.log('aca');
    res.send('GET User by Route: ' + req.query.nombre);
});

router.route('/:id')
    .get((req, res) => {
        console.log(req.param.id);
        res.json(
            {
                action: 'GET User by Route',
                id: req.params.id,
                nombre: req.query.nombre
            }
        );

    })
    .post((req, res) => {
        res.json(
            {
                action: 'GET User by Route',
                id: req.params.id,
                nombre: req.body.nombre
            }
        );
    });

    module.exports = router;