const frontendService = require('../Services/frontendService')

exports.readFrontendLenguajes = async (req, res) => {
    try {
        console.log("entrando a readFrontendLenguajes en el controller")
        //res.setHeader("Content-Type", "application/json")
        res.status(200)
        res.json(await frontendService.getAllFrontendLanguages())
        console.log("Saliendo de readFrontendLenguajes en el controller")

    } catch (error) {
        console.log("Error en el controller: - readFrontendLenguajes - ", error)
    }
}

exports.readFrontendLenguajesOrdered = async (req, res) => {
    try {
        let lenguajeParam = req.params.lenguaje
        let paramOrdenar = req.query.ordenar;

        const frontendFiltered = frontendService.getFrontendLanguagesFiltered(lenguajeParam, paramOrdenar)
        //console.log(req)
        if (frontendFiltered.length === 0) {
            return res.status(404).send(`No se encontró el lenguaje: ${lenguajeParam}`)
        }
        res.status(200).json({ arrayFrontend: frontendFiltered })
    } catch (error) {
        console.log("Error en el controller: - readFrontendLenguajesOrdered - ", error)
    }
}

/* exports.readFrontendDespedida = (req, res) => {
    res.status(200).json({ saludo: "Buenas noches niños" })
} */

exports.nuevoMetodoFronted = async (req, res) => {
    try {
        let nuevoQuery = req.query.nuevoQueryParam

        if (nuevoQuery === await frontendService.getTextoSecreto()) {
            return res.status(200).json({ nuevoMetodo: "Felicitaciones, adivinaste el texto secreto" })
        }

        res.status(404).json({ nuevoMetodo: "alguno de los datos ingresados son incorrectos, revisar!" })

    } catch (error) {

        console.log("Error en el controller: - nuevoMetodoFronted - ", error)

    }
}

exports.createFrontendLanguage = async (req, res) => {
    try {
        //console.log(req)
        let lenguajeNuevo = req.body;
        console.log("createFrontendLanguage CONTROLLER - ", lenguajeNuevo)
        res.status(200).json(await frontendService.createNewFrontendLanguage(lenguajeNuevo))
    } catch (error) {
        console.log("Error en el controller: - createFrontendLanguage - ", error)

    }
}

exports.deleteFrontendLanguage = async (req, res) => {
    try {
        const id = req.params.id
        const language = await frontendService.deleteFrontendLanguageService(id)

        if (language.length === 0) {
            return res.status(404).send(`No se encuentra un lenguaje a eliminar con el id: ${id}`)
        }

        res.status(200).json(language)
    } catch (error) {
        console.log("Error en el controller: - deleteFrontendLanguage - ", error)

    }
}

exports.updateFrontendLanguage = async (req, res) => {
    try {
        const id = req.params.id
        const lenguajeActualizado = req.body

        const language = await frontendService.updateFrontendLanguageService(id, lenguajeActualizado)

        if (language.length === 0) {
            return res.status(404).send(`No se encuentra un lenguaje a actualizar con el id: ${id}`)
        }

        res.status(200).json(language)
    } catch (error) {
        console.log("Error en el controller: - updateFrontendLanguage - ", error)
        return res.status(500).json({ error: "Error interno del servidor al actualizar el lenguaje" });
    }
}