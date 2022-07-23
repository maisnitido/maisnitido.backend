const express = require('express');
const personController = require('./controller/person');
const routes = express.Router();

routes.post('/person', personController.post)

routes.get('/status', (req, res) => {
    return res.send('<center>Healthy</center>');
});

module.exports = routes;