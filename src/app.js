const express = require('express');
const routes = require('./route');
const config = require('config');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

if (process.env.NEXT_ENV === undefined || process.env.NEXT_ENV == 'local') {
    app.use(function (req, res, next) {
        res.setHeader('access-control-allow-origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next()
    })
}

app.use(routes);

app.use((req, res) => {
    res.status(404).send(" 404 - Não encontramos a rota que você requisitou.")
});

var envirioment = (process.env.NEXT_ENV == undefined ? 'local' : process.env.NEXT_ENV) + '.';

var port = config.get(envirioment + 'port');

const server = app.listen(port, () => {
    const { address, port } = server.address();
    console.info(`Server iniciado no modo '${process.env.NODE_ENV}' em: http://${address == '::' ? 'localhost' : address}:${port}`);
});