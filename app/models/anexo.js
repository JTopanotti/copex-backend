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


var Anexo = sequelize.define('anexo', {
  cd_anexo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  nm_arquivo: {
      type: Sequelize.STRING(1000),
      allowNull: false
  },
  tp_arquivo: {
      type: Sequelize.STRING(100),
      allowNull: false
  },
  dt_anexo: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
  }
}, {timestamps: false});

module.exports = Anexo;
