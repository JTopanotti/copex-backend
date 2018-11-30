const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://copex:copex@localhost:5432/copex");

const Programa = require("../models/programa");
const Projeto = require("../models/projeto");


var ProgramaProjeto = sequelize.define('programa_projeto', {
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

module.exports = ProgramaProjeto;
