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

const RespostaQuestionario = require("../models/resposta_questionario");

var RespostaQuestionarioHistorico = sequelize.define('resposta_questionario_historico', {
  cd_pergunta: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: RespostaQuestionarioHistorico,
            key: 'cd_pergunta',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  },
  cd_questionario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: RespostaQuestionarioHistorico,
            key: 'cd_questionario',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }, 
  cd_usuario: {
      type: Sequelize.STRING(20),
      primaryKey: true,
      references: {
            model: RespostaQuestionarioHistorico,
            key: 'cd_usuario',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  },    
  resposta: {
      type: Sequelize.TEXT
  },
  dt_resposta: {
      type: Sequelize.DATE,
      primaryKey: true,
      defaultValue: Sequelize.NOW,
      allowNull: false
  },
  dt_alteracao: {
      type: Sequelize.DATE
  }
}, {timestamps: false});

module.exports = RespostaQuestionarioHistorico;
