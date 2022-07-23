const utils = require('../utils/request');

exports.post = function (req, res) {

    var email = req.body.email;

    if (dominios.indexOf(email.split('@')[1]) == -1) {
        return res.status(400).send(utils.getJsonError('001', 'dominio não cadastrado'));
    }

    return res.status(200).send();
}

var dominios = ['gmail.com', 'tokstok.com.br']