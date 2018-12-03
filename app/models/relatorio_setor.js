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

const Setor = require("../models/setor");

var RelatorioSetor = sequelize.define('relatorio_setor', {
  nr_relatorio: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cd_setor: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
            model: Setor,
            key: 'cd_setor',
            deferrable: Sequelize.Deferrable.NOT
      },
      
  }, 
  ds_relatorio: {
      type: Sequelize.STRING,
      allowNull: false
  }
}, {timestamps: false});

module.exports = Setor;
