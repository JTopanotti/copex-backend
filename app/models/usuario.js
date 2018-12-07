const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://copex:copex@localhost:5432/copex");

const Perfil = require("../models/perfil");


var Usuario = sequelize.define('usuario', {
//   cd_matricula: {
//       type: Sequelize.STRING(20),
//       primaryKey: true,
//       unique: true
//   }, 
  nm_usuario: {
      type: Sequelize.STRING,
      allowNull: false
  },
  email: {
      type: Sequelize.STRING
  },
  celular1: {
      type: Sequelize.STRING(40)
  },
  celular2: {
      type: Sequelize.STRING(40)
  },
  login: {
      type: Sequelize.STRING,
      allowNull: false
  },
  senha: {
      type: Sequelize.STRING.BINARY,
      allowNull: false
  },
  observacao: {
      type: Sequelize.STRING
  }, 
  id_situacao: {
      type: Sequelize.STRING(1),
      defaultValue: "A",
      allowNull: false
  },
  dt_cadastro: {
      type: Sequelize.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: false
  },
  dt_manutencao: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
  },
  cd_perfil: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
      references: {
            model: Perfil,
            key: 'cd_perfil',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }
}, {timestamps: false, freezeTableName: true, tableName: 'usuario'});

module.exports = Usuario;
