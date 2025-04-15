const Sequelize = require('sequelize');

const sequelize = new Sequelize('my_new_db', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
