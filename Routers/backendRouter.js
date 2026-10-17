const express = require('express')

const routerBackend = express.Router()

routerBackend.get('/', (req, res) => {
    res.json(lenguajes.backend)
 } )


 routerBackend.get('/:lenguaje', (req, res) => {
    let lenguajeParam = req.params.lenguaje
    const filtrado = lenguajes.backend.filter(
        lenguajes => lenguajes.nombre.toLocaleLowerCase() == lenguajeParam.toLocaleLowerCase()
    )
    if(filtrado.length === 0){
        return res.status(404).send(`No se encontró el lenguaje en frontend: ${lenguajeParam}`)
    }
    res.status(200).json(filtrado)
}
)

module.exports = routerBackend