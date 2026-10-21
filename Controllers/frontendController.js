const frontendService = require('../Services/frontendService')



exports.readFrontendLenguajes = (req, res) => {
    console.log("entrando a readFrontendLenguajes en el controller")
    //res.setHeader("Content-Type", "application/json")
    res.status(200)
    res.json(frontendService.getAllFrontendLanguages())
    console.log("Saliendo de readFrontendLenguajes en el controller")
}

exports.readFrontendLenguajesOrdered = (req, res) => {
    let lenguajeParam = req.params.lenguaje
    let paramOrdenar = req.query.ordenar;
    
    const frontendFiltered = frontendService.getFrontendLanguagesFiltered(lenguajeParam, paramOrdenar)
    //console.log(req)
   if(frontendFiltered.length === 0){
    return res.status(404).send(`No se encontró el lenguaje: ${lenguajeParam}`)
   }

    res.status(200).json({arrayFrontend: frontendFiltered})

}

exports.readFrontendDespedida = (req, res) => {
    res.status(200).json({saludo: "Buenas noches niños"})
}

exports.nuevoMetodoFronted = (req, res) => {
    let nuevoQuery = req.query.nuevoQueryParam

    if(nuevoQuery === frontendService.getTextoSecreto()){
        return res.status(200).json({nuevoMetodo: "Felicitaciones, adivinaste el texto secreto"})  
    }

    res.status(404).json({nuevoMetodo: "alguno de los datos ingresados son incorrectos, revisar!"})

}

exports.createFrontendLaguage = (req, res) => {
    console.log(req)
    let lenguajeNuevo = req.body;
    console.log("createFrontendLanguage CONTROLLER - ", lenguajeNuevo)
    res.status(200).json(frontendService.createNewFrontendLanguage(lenguajeNuevo))
}