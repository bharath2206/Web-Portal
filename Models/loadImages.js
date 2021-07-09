const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Images=sequelize.define("uploads",{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    image:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    image_type: {
        type: Sequelize.STRING,
    },

    data: {
        type: Sequelize.BLOB("long"),
    },
    pageName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    userId:{
        type: Sequelize.TEXT,
        allowNull: false
    }

})

module.exports = Images;