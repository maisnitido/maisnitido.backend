const {clientDb, validation} = require('../model/client');

exports.post = function (req, res) {
    
    const {error} = validation.validate(req.body);

    if (error == null) {
        res.status(201).send();
    }
    
    res.status(400).send(error.details.map(p => p.message).join(","))
    // await clientDb.create(req.body);
}
