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


var Permissao = sequelize.define('permissao', {
  cd_permissao: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  }, 
  ds_permissao: {
      type: Sequelize.STRING(100),
      allowNull: false
  }
}, {timestamps: false});

module.exports = Permissao;
