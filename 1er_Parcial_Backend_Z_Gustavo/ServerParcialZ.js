const express = require('express')
const app = express()
//const { peliculas } = require('./source/Peliculas')
//const { videoClub } = require('./source/Peliculas')
const peliculas = require('./source/Peliculas').videoClub.peliculas

const PUERTO = 3010
const HOST = '127.0.0.1'

//console.log(videoClub)
console.log(peliculas)

app.get("/", (req, res) => {
    res.status(200).send("Bienvenidos al servidor del primer parcial de - Z Gustavo –")
})

app.get("/api/peliculas", (req, res) => {
    res.status(200).json(peliculas)
})

app.get("/api/peliculas/:id", (req, res) => {
    const id = req.params.id
    console.log(typeof id)
    console.log("el id recibido por url params es: ", id)
    const filtrado = peliculas.find( peli => peli.id == id)

    if(!filtrado){
        return res.status(404).send(`no se encuentra una pélicula con el id: ${id}`)
    }
    
    res.status(200).json(filtrado)

})

app.listen(PUERTO, HOST, () => {
    console.log(`servidor corriendo en localhost http://${HOST}:${PUERTO}`)
})