const express = require('express')
const fs = require('node:fs')
const HOSTNAME = '127.0.0.1';
const PORT = 3000

const HOME = fs.readFileSync('./vistas/home.html')
const API = fs.readFileSync('./vistas/api.html')
const app = express()

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

app.listen(PORT, HOSTNAME, () => {
    console.log(`El servidor está corriendo en http://${HOSTNAME}:${PORT}/`)
})
