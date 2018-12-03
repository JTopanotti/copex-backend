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

const RelatorioSetor = require("../models/relatorio_setor");
const PerguntaQuestionario = require("../models/pergunta_questionario");


var RelatorioSetorPergunta = sequelize.define('relatorio_setor_pergunta', {
  nr_relatorio: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
            model: RelatorioSetor,
            key: 'nr_relatorio',
            deferrable: Sequelize.Deferrable.NOT
    },
    allowNull: false
  },
  cd_setor: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: RelatorioSetor,
            key: 'cd_setor',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }, 
  cd_pergunta: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: PerguntaQuestionario,
            key: 'cd_pergunta',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }, 
  cd_questionario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: PerguntaQuestionario,
            key: 'cd_questionario',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }, 
  html_molde: {
      type: Sequelize.TEXT,
      allowNull: false
  }
}, {timestamps: false});

module.exports = RelatorioSetorPergunta;
