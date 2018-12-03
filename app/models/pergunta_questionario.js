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

var PerguntaQuestionario = sequelize.define('pergunta_questionario', {
  cd_pergunta: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cd_questionario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: Questionario,
            key: 'cd_questionario',
            deferrable: Sequelize.Deferrable.NOT
      },
      
  }, 
  ds_pergunta: {
      type: Sequelize.TEXT,
      allowNull: false
  },
  tp_resposta: {
      type: Sequelize.TEXT,
      allowNull: false
  },
  ordem: {
      type: Sequelize.INTEGER,
      allowNull: false
  }
}, {timestamps: false});

module.exports = PerguntaQuestionario;
