const express = require('express')
const lenguajes = require('../src/lenguajes').infoLenguajes

const routerFrontend = express.Router()

routerFrontend.get('/', (req, res) => {
    console.log("Entrando en la ruta /api/lenguajes/frontend")
    res.json(lenguajes.frontend)
 })

routerFrontend.get('/despedida', (req, res) =>{
    res.status(200).send("Buenas noches niños")
})

routerFrontend.get('/:lenguaje', (req, res) => {
    let lenguajeParam = req.params.lenguaje
    const filtrado = lenguajes.frontend.filter(
        lenguajes => lenguajes.nombre.toLocaleLowerCase() == lenguajeParam.toLocaleLowerCase()
    )
    if(filtrado.length === 0){
        return res.status(404).send(`No se encontró el lenguaje en frontend: ${lenguajeParam}`)
    }
    res.status(200).json(filtrado)
}
)



module.exports = routerFrontend