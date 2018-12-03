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

var AnexoRespostaQuestionario = sequelize.define('anexo_resposta_questionario', {
  cd_pergunta: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: RespostaQuestionario,
            key: 'cd_pergunta',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  },
  cd_questionario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: RespostaQuestionario,
            key: 'cd_questionario',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }, 
  cd_usuario: {
      type: Sequelize.STRING(20),
      primaryKey: true,
      references: {
            model: RespostaQuestionario,
            key: 'cd_usuario',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  },    
  cd_anexo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: Anexo,
            key: 'cd_anexo',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }
}, {timestamps: false});

module.exports = AnexoRespostaQuestionario;
