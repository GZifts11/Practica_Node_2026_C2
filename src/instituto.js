/*
2)
Crear un archivo llamado instituto.js, 
dentro de este archivo crear un objeto que se 
llame alumno con las siguientes propiedades: 
Nombre, Edad, inscriptoAMaterias 
(un array de strings), debeCorrelativa 
(un booleano)
*/

const alumnos_instituto = {
    alumnos: [
        {
            nombre: "Pepe",
            edad: 23,
            inscriptoAMaterias: ["Frontend", "Backend"],
            debeCorrelativa: false
        },
        {
            nombre: "Debora D'Arena",
            edad: 15,
            inscriptoAMaterias: ["Frontend", "Backend", "Ingenieria de Software"],
            debeCorrelativa: false
        },
        {
            nombre: "Marcelo Ayala",
            edad: 55,
            inscriptoAMaterias: ["Frontend", "Backend"],
            debeCorrelativa: true
        }, {
            nombre: "Guillermo Ronaldinio",
            edad: 22,
            inscriptoAMaterias: ["Frontend", "Backend"],
            debeCorrelativa: false
        },
        {
            nombre: "Harry Potter",
            edad: 15,
            inscriptoAMaterias: ["Posiones", "Herboristeria", "Defensa contra las artes oscuras"],
            debeCorrelativa: true
        }
    ]
}

module.exports.alumnos_instituto = alumnos_instituto
//console.log(module.exports)
//module.exports = { alumnos : alumnos_instituto }

/* const miObjetoPepe = {
    nombre:"pepe",
    apellido: "Gonzales",
    ejecutarPepe: (nombre, handler) => { 
        let valorARetornar = 10 + 10
        console.log("Ejecutando pepe - ", nombre)
        console.log("Estoy haciendo cosas dentro del objeto pepe")
        handler(nombre, "Rodriguez")
        return valorARetornar
    }
}
console.log(miObjetoPepe)

miObjetoPepe.algo = "esto es algo"

console.log(miObjetoPepe)

console.log(miObjetoPepe.nombre)
console.log(miObjetoPepe.existeEstaPropiedad)

let resultadoEjecutarPepe = 
miObjetoPepe.ejecutarPepe("Guillermo Pepe", (nombre, apellido) => {
    console.log("Esto está dentro de la callback que le paso a ejecutar pepe")
    console.log("Este es el nombre que recibe la callback", nombre, " ", apellido)
})

console.log("El resultado de ejecutar pepe es: ", resultadoEjecutarPepe) */