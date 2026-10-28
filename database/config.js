const dotenv = require('dotenv')//.config()

dotenv.config();

const configDB = {
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    server: process.env.SERVER_NAME,
    port: parseInt(process.env.PORT_DB),
    options: {
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

module.exports = { configDB }