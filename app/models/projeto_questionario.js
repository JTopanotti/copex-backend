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

const Questionario = require("../models/questionario");
const Projeto = require("../models/projeto");

var ProjetoQuestionario = sequelize.define('projeto_questionario', {
  cd_projeto: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: Projeto,
            key: 'cd_projeto',
            deferrable: Sequelize.Deferrable.NOT
      },
      
  },
  cd_questionario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: Questionario,
            key: 'cd_questionario',
            deferrable: Sequelize.Deferrable.NOT
      },
      
  }
}, {timestamps: false});

module.exports = ProjetoQuestionario;
