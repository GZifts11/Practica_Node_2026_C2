//const frontendRepository = require('../Repositories/frontendRepository')
const frontendRepository = require('../Repositories/frontendSQLRepository')

exports.getAllFrontendLanguages = async () => {
    try {
        console.log("Pasando por el service!!!!")
        return await frontendRepository.getAllFrontendLanguagesRepository()
    } catch (error) {
        console.log("Error en el service: - getAllFrontendLanguages - ", error)
    }
}

exports.getFrontendLanguagesFiltered = async (lenguaje, orderBy) => {
    try {
        const filtrado = await frontendRepository.getAllFrontendLanguagesRepository().filter(
            lenguajes => lenguajes.nombre.toLocaleLowerCase() == lenguaje.toLocaleLowerCase()
        )
        if (filtrado.length === 0) {
            return []
        }

        let paramOrdenarLower = orderBy === undefined ? "" : orderBy.toLocaleLowerCase()

        if (paramOrdenarLower === "arriba".toLocaleLowerCase()) {
            return filtrado.sort((a, b) => {
                return b.cantidadAlumnos - a.cantidadAlumnos
            })
        } else if (paramOrdenarLower === "abajo".toLocaleLowerCase()) {
            return filtrado.sort((a, b) => {
                return a.cantidadAlumnos - b.cantidadAlumnos
            }
            )
        } else {
            return filtrado
        }
    } catch (error) {
        console.log("Error en el service: - getFrontendLanguagesFiltered - ", error)
    }
}

exports.getTextoSecreto = async () => {
    try {
        return await frontendRepository.getTextoSecretoDB().toLocaleLowerCase()
    } catch (error) {
        console.log("Error en el service: - getTextoSecreto - ", error)
    }
}

exports.createNewFrontendLanguage = async (language) => {
    try {
        console.log("SERVICE - ingresando a createNewFrontendLanguage")
        console.log(`POST Frontend: - ${language}`)
        return await frontendRepository.createNewFrontendLanguageRepository(language)
    } catch (error) {
        console.log("Error en el service: - createNewFrontendLanguage - ", error)
    }
}

exports.deleteFrontendLanguageService = async (id) => {
    try {
        return await frontendRepository.deleteFrontendLanuageRepository(id)
    } catch (error) {
        console.log("Error en el service: - deleteFrontendLanguageService - ", error)

    }
}

exports.updateFrontendLanguageService = async (id, lenguageUpdated) => {
    try {
        return await frontendRepository.updateFrontendLanuageRepository(id, lenguageUpdated)
    } catch (error) {
        console.log("Error en el service: - updateFrontendLanguageService - ", error)

    }

}