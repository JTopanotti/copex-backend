const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://copex:copex@localhost:5432/copex");

const Usuario = require("../models/usuario");
const Projeto = require("../models/projeto");


var ProfessorProjeto = sequelize.define('professor_projeto', {
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
  cd_professor: {
      type: Sequelize.STRING(20),
      primaryKey: true,
      references: {
            model: Usuario,
            key: 'cd_matricula',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }
}, {timestamps: false, freezeTableName: true, tableName: 'professor_projeto'});

module.exports = ProfessorProjeto;
