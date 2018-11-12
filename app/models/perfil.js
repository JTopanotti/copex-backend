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


var Perfil = sequelize.define('perfil', {
  cd_perfil: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  }, 
  ds_perfil: {
      type: Sequelize.STRING,
      allowNull: false
  }
}, {timestamps: false});

module.exports = Perfil;
