const frontendRepository = require('../Repositories/frontendRepository')

exports.getAllFrontendLanguages = () =>{
    console.log("Pasando por el service!!!!")
    return frontendRepository.getAllFrontendLanguagesRepository()
}

exports.getFrontendLanguagesFiltered = (lenguaje, orderBy) => {
     const filtrado = frontendRepository.getAllFrontendLanguagesRepository().filter(
        lenguajes => lenguajes.nombre.toLocaleLowerCase() == lenguaje.toLocaleLowerCase()
    )
    if(filtrado.length === 0){
        return []
    }

    let paramOrdenarLower = orderBy === undefined ? "" : orderBy.toLocaleLowerCase()

    if(paramOrdenarLower === "arriba".toLocaleLowerCase()){
        return filtrado.sort((a, b) => {
            return b.cantidadAlumnos - a.cantidadAlumnos
        })
    }else if(paramOrdenarLower === "abajo".toLocaleLowerCase() ){
        return filtrado.sort((a, b) => {
            return a.cantidadAlumnos - b.cantidadAlumnos
        }
        )
    }else {
        return filtrado
    }
}

exports.getTextoSecreto = () => {
    return frontendRepository.getTextoSecretoDB().toLocaleLowerCase()
}

exports.createNewFrontendLanguage = (language) => {
    console.log("SERVICE - ingresando a createNewFrontendLanguage")
    console.log(`POST Frontend: - ${language}`)
    return frontendRepository.createNewFrontendLanguageRepository(language)
}