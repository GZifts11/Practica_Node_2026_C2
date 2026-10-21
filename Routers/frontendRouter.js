const express = require('express')
const frontendController = require('../Controllers/frontendController')

const routerFrontend = express.Router()

routerFrontend.use(express.json());

 routerFrontend.get('/', (req, res) => {
    console.log("Entrando en la ruta /api/lenguajes/frontend - desde el Router")
    frontendController.readFrontendLenguajes(req, res)
 })

routerFrontend.post('/', (req, res) =>{
    console.log("Entrando en la ruta /api/lenguajes/frontend - desde el Router POST!!!")
    frontendController.createFrontendLaguage(req, res)
})

routerFrontend.get('/despedida', (req, res) =>{ frontendController.readFrontendDespedida(req, res) })

routerFrontend.get('/nuevometodo', (req, res) => {
    frontendController.nuevoMetodoFronted(req, res)
})

routerFrontend.get('/:lenguaje', (req, res) => {
    frontendController.readFrontendLenguajesOrdered(req, res)
})



/* routerFrontend.get('/', (req, res) => {
    //let queryRaiz = req.query.cualquier //aca agregamos la posibilidad de recibir un query Param en la raiz de Lenguajes - Frontend 
    //let queryRaizCosa = req.query.cosa
    console.log("Entrando en la ruta /api/lenguajes/frontend")
    //lenguajes.frontend.push(queryRaiz) //aca agregamos al array lo que recibimos por query param (que es opcional) sin realizar ningun tipo de validación (mala práctica)
    //lenguajes.frontend.unshift(queryRaizCosa)
    res.json(lenguajes.frontend)
 }) */

module.exports = routerFrontend