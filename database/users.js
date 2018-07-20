let db = require('./db');
let sequelize = require('sequelize');

module.exports = db.sequelize.define('users', {
    user_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: ""
    }
}, {
        tableName: 'table_users',
        freezeTableName: true,
        timestamps: false
    });