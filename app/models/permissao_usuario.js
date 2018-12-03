const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://copex:copex@localhost:5432/copex");

const Usuario = require("../models/usuario");
const Permissao = require("../models/permissao");


var PermissaoUsuario = sequelize.define('permissao_usuario', {
  cd_permissao: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: Permissao,
            key: 'cd_permissao',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  },
  cd_matricula: {
      type: Sequelize.STRING(20),
      primaryKey: true,
      references: {
            model: Usuario,
            key: 'cd_matricula',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }
}, {timestamps: false, freezeTableName: true, tableName: 'professor_projeto'});

module.exports = PermissaoUsuario;
