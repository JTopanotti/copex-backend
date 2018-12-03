const Anexo = require("../models/anexo");

module.exports.listar = async (req, res) => {
    Usuario.findAll().then(values => {
        res.json(values);
    }).catch(error => {
        res.send(error);
        console.error("Error consulting usuarios", error);
    });
};

module.exports.salvar = async (req, res) => {
    let filename = undefined;
    if(req.file){
        filename = req.file.filename;
    } else {
        console.error("Houve algum erro no upload do arquivo");
    }

    if(filename){
        Anexo.create({nm_arquivo: filename, tp_arquivo: "image"})
        .then(() => {
            Anexo.findOrCreate({where: {nm_arquivo: filename}, 
                                defaults: {nm_arquivo: filename, tp_arquivo: "image"}})
        })
        .spread((anexo, created) => {
            console.log(anexo.get({plain: true}));
            console.log(created);
        });
    }
    res.json(console.log(anexo.get({plain: true})));
}