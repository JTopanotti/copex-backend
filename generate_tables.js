var Anexo = require("./app/models/anexo");

Anexo.sync({force: true}).then(() => {
    console.log("Tabela anexo criado com sucesso");
});