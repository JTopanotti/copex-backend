const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://copex:copex@localhost:5432/copex");

const AreaConhecimento = require("../models/area_conhecimento");
const Programa = require("../models/Programa");

var AreaConhecimentoPrograma = sequelize.define('area_conhecimento_programa', {
  cd_area_conhecimento: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: AreaConhecimento,
            key: 'cd_area_conhecimento',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  },
  cd_programa: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: Programa,
            key: 'cd_programa',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }
}, {timestamps: false, freezeTableName: true, tableName: 'programa_projeto'});

module.exports = AreaConhecimentoPrograma;
