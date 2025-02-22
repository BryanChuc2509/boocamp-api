const path = require('node:path');
const dotenv = require('dotenv');
const { readdirSync } = require('node:fs');
const { Sequelize, DataTypes } = require('sequelize');
dotenv.config();

let sequelize;
const db = {}

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT

const init = () => {
    if (!sequelize) {
        sequelize = new Sequelize({
            host: dbHost,
            username: dbUser,
            password: dbPassword,
            dialect: "mssql", // SGBD
            port: dbPort,
            database: dbName,
            dialectOptions: {
                options: {
                    encrypt: false,
                }
            }
        })
    }

    const files = readdirSync(__dirname)
        .filter((file) => {
            return file.endsWith(".js") && file !== 'index.js';
        });
    files.forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, DataTypes);
        db[model.name] = model;
    });

    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    })
    return db;
}

module.exports = init;
