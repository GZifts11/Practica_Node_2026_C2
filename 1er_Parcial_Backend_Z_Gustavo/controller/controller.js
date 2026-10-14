const peliculas = require('../source/Peliculas').videoClub.peliculas

function validarDisponibilidadPelicula(elemento, cantidadDescontar){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(elemento.disponible && elemento.cantidad_disponible >= cantidadDescontar){
                resolve(`Se puede alquilar la pelicula: ${elemento.nombre}`)
            }else {
                reject(`Error! ${elemento.nombre} no está disponible o no alcanza la cantidad. - ${elemento.cantidad_disponible}`)
            }
        }, 1000) 
    })
}

function alquilarPelicula(respuesta){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(`alquiler realizado: ${respuesta}`)
        }, 4000) 
    })
}

function realizarAlquiler(pelicula, cantidadAAlquilar){
    validarDisponibilidadPelicula(pelicula, cantidadAAlquilar)
.then( response => { 
    console.log("Entrando al primer then")
    return alquilarPelicula(response)})
.then( response => { 
    console.log("Entrando al segundo then")
    console.log(response)})
.catch( error => { console.log( "ERROR!!!", error )})
}

realizarAlquiler(peliculas[3], 4)