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

const Projeto = require("../models/projeto");

var Reuniao = sequelize.define('reuniao', {
  nr_reuniao: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  cd_projeto: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: Projeto,
            key: 'cd_projeto',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  },
  dt_reuniao: {
      type: Sequelize.DATE,
      allowNull: false
  },
  resumo_reuniao: {
      type: Sequelize.VARCHAR,
      allowNull: false
  },
  trabalho_realizado: {
      type: Sequelize.VARCHAR,
      allowNull: false
  },
  acao_futura: {
      type:Sequelize.VARCHAR
  }
}, {timestamps: false});

module.exports = Reuniao;
