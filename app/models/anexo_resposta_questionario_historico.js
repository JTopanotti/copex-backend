const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URL);

const AnexoRespostaQuestionario = require("../models/anexo_resposta_questionario");

var AnexoRespostaQuestionarioHistorico = sequelize.define('anexo_resposta_questionario_historico', {
 dt_resposta: {
      type: Sequelize.DATE,
      primaryKey: true,
      defaultValue: Sequelize.NOW,
      allowNull: false
  },
  cd_pergunta: {
      type: Sequelize.INTEGER,
      unique: true,
      references: {
            model: AnexoRespostaQuestionario,
            key: 'cd_pergunta',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  },
  cd_questionario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: AnexoRespostaQuestionario,
            key: 'cd_questionario',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }, 
  cd_usuario: {
      type: Sequelize.STRING(20),
      primaryKey: true,
      references: {
            model: AnexoRespostaQuestionario,
            key: 'cd_usuario',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  },    
  cd_anexo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: AnexoRespostaQuestionario,
            key: 'cd_anexo',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }
}, {timestamps: false});

module.exports = AnexoRespostaQuestionarioHistorico;
