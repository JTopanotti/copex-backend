const Perfil = require("../models/perfil");


module.exports.listar = async (req, res) => {
    Perfil.findAll().then(values => {
        res.json(values);
    }).catch(error => {
        res.send(error);
        console.error("Error consulting usuarios", error);
    });
};
