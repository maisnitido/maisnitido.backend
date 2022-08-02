const express = require('express');
const routes = express.Router();
const usercontroller = require('./controller/usercontroller');
const clientController = require('./controller/clientcontroller');

routes.post('/user', usercontroller.post);

routes.post('/client', clientController.post);

routes.get('/status', (req, res) => {
    return res.send('<center>Healthy</center>');
});

module.exports = routes;