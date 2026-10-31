const frontend = require('../src/lenguajes').infoLenguajes.frontend
const { getSQLConnection } = require('../database/conexion')
const sql = require('mssql')

const queries = require('../database/queries')

exports.getAllFrontendLanguagesRepository = async () => {
    const pool = await getSQLConnection()
    try {
        console.log("Ingresando al repository SQL ......")
        const resultado = await pool.request().query(queries.getFrontendLanguages)
        //console.log(resultado)
        console.table(resultado.recordset)
        console.log("Saliendo del repository después de consultar los datos")
        //throw new Error("Esto es un error forzado por mi")
        return resultado.recordset
    } catch (error) {
        console.log("Error en el repository - getAllFrontendLanguagesRepository - ", error)
        //throw error
    }

}

/* exports.getTextoSecretoDB = () => {
    console.log("Pidiendo el texto a la base de datos......")
    return "TextoSecreto"
}
 */

exports.createNewFrontendLanguageRepository = async (language) => {
    const { materia_id, nombre, turno_id, comision_id, cantidad_alumnos } = language
    console.log(language)
    const pool = await getSQLConnection();

    const lenguajeNuevo = { materia_id, nombre, turno_id, comision_id, cantidad_alumnos }
    console.table(lenguajeNuevo)

    try {
        console.log("CreateNewFrontendLangageRepository - recibido: ", language)

        const resultado = await pool.request()
        .input('materia_id', sql.Int, materia_id)
        .input('nombre', sql.NVarChar, nombre)
        .input('turno_id', sql.Int, turno_id)
        .input('comision_id', sql.Int, comision_id)
        .input('cantidad_alumnos', sql.Int, comision_id)
        .query(queries.createLanguage)



        return resultado.recordset
    } catch (error) {
        console.log("Error en el repository - createNewFrontendLanguageRepository - ", error)
    }

}

exports.deleteFrontendLanguageRepository = async (id) => {
    const pool = await getSQLConnection()

    try {
        console.log("REPOSITORY - deleteFrontendLanguageRepository - id:", id)
         const lenguajeEncontrado = await pool.request()
         .input('id', sql.Int, id)
         .query(queries.getLanguagesById)

         if(lenguajeEncontrado.recordset.length == 0) {
            console.log("lenguaje no encontrado")
            //throw new Error("Lenguaje no encontrado");
            return []
         }else{
            console.log("Se eliminó el lenguaje de la lista - id:", id)
            await pool.request()
            .input('id', sql.Int, id)
            .query(queries.deleteLanguageById)

            return lenguajeEncontrado.recordset[0]
         }

    } catch (error) {
        console.log("Error en deleteFrontendLAnguageRepository ", error)
    }
}

exports.updateFrontendLanguageRepository = async (id, languageUpdated) => {
    //const { id, nombre, turno, comision, cantidadAlumnos } = language
    try {
        const pool = await getSQLConnection()

         console.log("REPOSITORY - updateFrontendLanguageRepository - id:", id, "- lenguajeActualizado:", languageUpdated)
         const requestActualizado = pool.request();
         
         requestActualizado.input('id', sql.Int, id);

         const queryParts = [];

         if(languageUpdated.materia_id !== undefined) {
            requestActualizado.input('materia_id', sql.Int, languageUpdated.materia_id);
            queryParts.push('materia_id = @materia_id')
         }

        if(languageUpdated.nombre !== undefined) {
            requestActualizado.input('nombre', sql.VarChar , languageUpdated.nombre);
            queryParts.push('nombre = @nombre')
         }

        if(languageUpdated.turno_id !== undefined) {
            requestActualizado.input('turno_id', sql.Int , languageUpdated.turno_id);
            queryParts.push('turno_id = @turno_id')
         }
         
         if(languageUpdated.comision_id !== undefined) {
            requestActualizado.input('comision_id', sql.Int , languageUpdated.comision_id);
            queryParts.push('comision_id = @comision_id')
         }

        if(languageUpdated.cantidad_alumnos !== undefined) {
            requestActualizado.input('cantidad_alumnos', sql.Int , languageUpdated.cantidad_alumnos);
            queryParts.push('cantidad_alumnos = @cantidad_alumnos')
         }

         const queryFinal = `UPDATE lenguajes SET ${queryParts.join(', ')} WHERE id = @id`
         console.log("Query FINAL >>>>>", queryFinal)

         const lenguajeActualizado = await requestActualizado.query(queryFinal)

         if(lenguajeActualizado.rowsAffected[0] === 0) {
            return [];
         }

         return [ { id, ...languageUpdated } ];

    } catch (error) {
        console.log("Error en updateFrontendLanguageRepository ", error)
        throw error
    }
}