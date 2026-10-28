const frontend = require('../src/lenguajes').infoLenguajes.frontend

exports.getAllFrontendLanguagesRepository = async () => {
    try {
        console.log("Ingresando al repository......")
        let frontendArray = await frontend
        console.log("Saliendo del repository después de consultar los datos")
        //throw new Error("Esto es un error forzado por mi")
        return frontendArray
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
    try {
            console.log("CreateNewFrontendLangageRepository - recibido: ", language)
    await frontend.push(language)
    return frontend
    } catch (error) {
        console.log("Error en el repository - createNewFrontendLanguageRepository - ", error)
    }

}

exports.deleteFrontendLanuageRepository = async (id) => {
    try {
            console.log("deleteFrontendLanuageRepository - id:", id)
    const indice = await frontend.findIndex(lenguaje => lenguaje.id == id)

    if (indice >= 0) {
        frontend.splice(indice, 1)
        return frontend
    } else {
        return []
    }
    } catch (error) {
        console.log("Error en el repository - deleteFrontendLanuageRepository - ", error)
    }

}

exports.updateFrontendLanuageRepository = async (id, languageUpdated) => {
    try {
        console.log("updateFrontendLanuageRepository - id:", id)
        const indice = await frontend.findIndex(lenguaje => lenguaje.id == id)

        if (indice >= 0) {
            frontend[indice] = languageUpdated
            return frontend
        } else {
            return []
        }
    } catch (error) {
        console.log("Error en el repository - updateFrontendLanuageRepository - ", error)
    }

}