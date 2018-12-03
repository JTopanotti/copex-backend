const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://copex:copex@localhost:5432/copex");

const Usuario = require("../models/usuario");
const Reuniao = require("../models/reuniao");


var ReuniaoParticipante = sequelize.define('reuniao_participante', {
  nr_reuniao:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: Reuniao,
            key: 'nr_reuniao',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  },
  cd_projeto: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: Reuniao,
            key: 'cd_projeto',
            deferrable: Sequelize.Deferrable.NOT
      },
      allowNull: false
  },
  cd_usuario: {
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

module.exports = ReuniaoParticipante;
