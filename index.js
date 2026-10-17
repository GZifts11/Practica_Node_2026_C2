const e = require('express');
const express = require('express')
const fs = require('node:fs')
const HOSTNAME = '127.0.0.1';
const PORT = 3000

const lenguajes = require('./src/lenguajes').infoLenguajes

const HOME = fs.readFileSync('./vistas/home.html')
const API = fs.readFileSync('./vistas/api.html')
const app = express()

//Routers:
const routerFrontend = express.Router()
app.use('/api/lenguajes/frontend', routerFrontend)

const routerBackend = express.Router()
app.use('/api/lenguajes/backend', routerBackend)

app.get('/',(req, res) =>{
    console.log("Entrando a la raiz de la API")
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(HOME)
})

app.get('/api', (req, res) => {
    console.log("Entrando en la ruta /api...")
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(API)
})

app.get('/api/lenguajes', (req, res) => {
    console.log("entrando en la ruta /api/lenguajes")
    const miJsonLenguajes = JSON.stringify(lenguajes)
    console.log(miJsonLenguajes)
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
    res.send(miJsonLenguajes)
})

routerFrontend.get('/', (req, res) => {
    console.log("Entrando en la ruta /api/lenguajes/frontend")
    res.json(lenguajes.frontend)
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

app.listen(PORT, HOSTNAME, () => {
    console.log(`El servidor está corriendo en http://${HOSTNAME}:${PORT}/`)
})
