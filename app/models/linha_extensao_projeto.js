const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://copex:copex@localhost:5432/copex");

const LinhaExtensao = require("../models/linha_extensao");
const Projeto = require("../models/projeto");


var LinhaExtensaoProjeto = sequelize.define('linha_extensao_projeto', {
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
  linha_extensao: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: LinhaExtensao,
            key: 'cd_linha_extensao',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }
}, {timestamps: false, freezeTableName: true, tableName: 'programa_projeto'});

module.exports = LinhaExtensaoProjeto;
