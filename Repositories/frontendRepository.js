const frontend = require('../src/lenguajes').infoLenguajes.frontend

exports.getAllFrontendLanguagesRepository = () => {
    console.log("Ingresando al repository......")
    let frontendArray = frontend 
    console.log("Saliendo del repository después de consultar los datos")
    return frontendArray
}

exports.getTextoSecretoDB = () => {
    console.log("Pidiendo el texto a la base de datos......")
    return "TextoSecreto"
}

exports.createNewFrontendLanguageRepository = (language) => { 
    console.log("CreateNewFrontendLangageRepository - recibido: ", language)
    frontend.push(language)
    return frontend
}

exports.deleteFrontendLanuageRepository = (id) =>{
    console.log("deleteFrontendLanuageRepository - id:", id)
    const indice = frontend.findIndex(lenguaje => lenguaje.id == id)

    if( indice >= 0 ){
        frontend.splice(indice,1)
        return frontend
    }else{
        return []
    }
}

exports.updateFrontendLanuageRepository = (id, languageUpdated) =>{
    console.log("updateFrontendLanuageRepository - id:", id)
    const indice = frontend.findIndex(lenguaje => lenguaje.id == id)

    if( indice >= 0 ){
        frontend[indice] = languageUpdated
        return frontend
    }else{
        return []
    }
}