const path = require('node:path');
const dotenv = require('dotenv');
const {readdirSync} = require('node:fs');
const { Sequelize, DataTypes } =require('sequelize');

dotenv.config();
let sequelize;
const db = {}

const dbName=process.env.DB_NAME
const dbUser=process.env.DB_NAME
const dbPassword=process.env.DB_PASSWORD
const dbHost=process.env.DB_HOST
const dbPort=process.env.DB_PORT

const init = () => {
    if(!sequelize){
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
}
