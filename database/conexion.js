const sql = require('mssql')
const { configDB } = require('./config')

exports.getSQLConnection = async () => {
    try {
        console.log("Entrando en getSQLConnection")

        const pool = await sql.connect(configDB)
        console.log(pool)

        const result = await pool.request().query('SELECT 10')

        console.dir(result)

        return pool

    } catch (error) {
        console.log(`Error en getSQLConnection: ${error}`)
    }
}

//getSQLConnection()