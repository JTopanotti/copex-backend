const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URL);

const Usuario = require("../models/usuario");
const Projeto = require("../models/projeto");


var AlunoProjeto = sequelize.define('aluno_projeto', {
  cd_projeto: {
      type: Sequelize.INTEGER,
      unique: true,
      references: {
            model: Projeto,
            key: 'id',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  },
  cd_aluno: {
      type: Sequelize.STRING(20),
      unique: true,
      references: {
            model: Usuario,
            key: 'id',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }
}, {timestamps: false, underscored: true, freezeTableName: true, tableName: 'aluno_projeto'});

module.exports = AlunoProjeto;
