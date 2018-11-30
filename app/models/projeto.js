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

const Usuario = require("../models/usuario");

var Projeto = sequelize.define('projeto', {
  cd_projeto: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  nm_projeto: {
      type: Sequelize.STRING(1000)
  },
  cd_coordenador: {
      type: Sequelize.STRING(20),
      references: {
            model: Usuario,
            key: 'cd_matricula',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  },
  dt_inicio: {
      type: Sequelize.DATE
  },
  dt_fim: {
      type: Sequelize.DATE
  },
  ds_projeto: {
      type: Sequelize.TEXT
  }
}, {timestamps: false});

module.exports = Projeto;
