const fronted = require('../src/lenguajes').infoLenguajes.frontend

exports.getAllFrontendLanguagesRepository = () => {
    console.log("Ingresando al repository......")
    let frontendArray = fronted 
    console.log("Saliendo del repository después de consultar los datos")
    return frontendArray
}

exports.getTextoSecretoDB = () => {
    console.log("Pidiendo el texto a la base de datos......")
    return "TextoSecreto"
}

exports.createNewFrontendLanguageRepository = (language) => { 
    console.log("CreateNewFrontendLangageRepository - recibido: ", language)
    fronted.push(language)
    return fronted
}