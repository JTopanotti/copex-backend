const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://copex:copex@localhost:5432/copex");

const Curso = require("../models/curso");
const Usuario = require("../models/usuario");


var CursoUsuario = sequelize.define('curso_usuario', {
  cd_matricula: {
      type: Sequelize.STRING(20),
      primaryKey: true,
      references: {
            model: Usuario,
            key: 'cd_matricula',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  },
  cd_curso: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: Curso,
            key: 'cd_curso',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  }
}, {timestamps: false, freezeTableName: true, tableName: 'curso_usuario'});

module.exports = CursoUsuario;
