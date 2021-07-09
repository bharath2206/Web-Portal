const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("portugal","root","",{dialect:"mysql", host:"localhost"});

module.exports = sequelize;