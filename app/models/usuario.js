const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.PG_DATABASE, 
    process.env.PG_USERNAME, 
    process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});

const Perfil = require("../models/perfil");


var Usuario = sequelize.define('usuario', {
  cd_matricula: {
      type: Sequelize.STRING(20),
      primaryKey: true,
      unique: true
  }, 
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
  dt_manuntencao: {
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
}, {timestamps: false});

module.exports = Usuario;
