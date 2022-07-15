exports.isValid = function(req, res) {   
    if (req.params.email.split('@')[1] == 'gmail.com') {
        return res.status(200).send();
    }    
    return res.status(400).send('O dominio ' + req.params.email.split('@')[1] + ' não cadastrado na plataforma.')
}

exports.get = function(req, res) {
    var email = req.params.email;        
    return res.status(404).send();    
}

exports.post = function (req, res) {
    console.log(req.body);
    if (req == {}) {
        return res.status(400).send('Não foi possivel realizar o cadastro');
    }
    return res.status(201).send();
}