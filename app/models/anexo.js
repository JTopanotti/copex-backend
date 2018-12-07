const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URL, {dialect: 'postgres'});

var Anexo = sequelize.define('anexo', {
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
}, {timestamps: false, underscored: true, freezeTableName: true, tableName: 'anexo'});

module.exports = Anexo;
