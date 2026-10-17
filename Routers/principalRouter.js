const express = require('express')
const fs = require('node:fs')

const HOME = fs.readFileSync('./vistas/home.html')
const API = fs.readFileSync('./vistas/api.html')
const lenguajes = require('../src/lenguajes').infoLenguajes

const routerPrincipalApi = express.Router()

routerPrincipalApi.get('/home',(req, res) =>{
    console.log("Entrando a la raiz de la API")
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(HOME)
})

routerPrincipalApi.get('/', (req, res) => {
    console.log("Entrando en la ruta /api...")
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send(API)
})

routerPrincipalApi.get('/lenguajes', (req, res) => {
    console.log("entrando en la ruta /api/lenguajes")
    const miJsonLenguajes = JSON.stringify(lenguajes)
    console.log(miJsonLenguajes)
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
    res.send(miJsonLenguajes)
})



module.exports = routerPrincipalApi
