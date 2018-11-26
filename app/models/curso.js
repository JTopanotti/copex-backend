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


var Curso = sequelize.define('curso', {
  cd_curso: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  }, 
  nm_curso: {
      type: Sequelize.STRING
  },
  ds_curso: {
      type: Sequelize.TEXT
  }
}, {timestamps: false});

module.exports = Curso;
