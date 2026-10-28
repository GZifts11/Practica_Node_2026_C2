const express = require('express')
const frontendController = require('../Controllers/frontendController')

const routerFrontend = express.Router()

routerFrontend.use(express.json());

routerFrontend.get('/', frontendController.readFrontendLenguajes)
routerFrontend.post('/', frontendController.createFrontendLanguage)
/* routerFrontend.get('/despedida', frontendController.readFrontendDespedida) */
routerFrontend.get('/nuevometodo',frontendController.nuevoMetodoFronted)
routerFrontend.get('/:lenguaje', frontendController.readFrontendLenguajesOrdered)
routerFrontend.delete("/:id/", frontendController.deleteFrontendLanguage)
routerFrontend.put("/:id/", frontendController.updateFrontendLanguage)



/* routerFrontend.get('/', (req, res) => {
    //let queryRaiz = req.query.cualquier //aca agregamos la posibilidad de recibir un query Param en la raiz de Lenguajes - Frontend 
    //let queryRaizCosa = req.query.cosa
    console.log("Entrando en la ruta /api/lenguajes/frontend")
    //lenguajes.frontend.push(queryRaiz) //aca agregamos al array lo que recibimos por query param (que es opcional) sin realizar ningun tipo de validación (mala práctica)
    //lenguajes.frontend.unshift(queryRaizCosa)
    res.json(lenguajes.frontend)
 }) */

module.exports = routerFrontend