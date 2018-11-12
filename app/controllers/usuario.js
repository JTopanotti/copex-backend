const Usuario = require("../models/usuario");



module.exports.list = async (req, res) => {
    Usuario.findAll().then(values => {
        res.json(values);
    }).catch(error => {
        res.send(error);
        console.error("Error consulting usuarios", error);
    });
};
