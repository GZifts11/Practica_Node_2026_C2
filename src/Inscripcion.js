/*
realizar los siguientes métodos.
a)
Se desea generar un método para realizar una inscripción a una materia (recibe como parámetro de entrada el objeto alumno, y el nombre de la materia a inscribirse) y un método para validar si tiene las correlativas aprobadas (recibe como parámetro de entrada el objeto alumno)
b)
El método para realizar una inscripción no se debe ejecutar hasta no validar si tiene las correlativas aprobadas. En el método validarCorrelativa, utilizar la propiedad “debeCorrelativa” para validarlo, en el método para inscribir, en caso de que el alumno no deba la correlativa, agregar la materia al array de materias “inscriptoAMaterias” del objeto.
c)
Simular retardos en los métodos de validar correlativas y realizar inscripción de 2 segundos y 5 segundos respectivamente.
d)
En cualquiera de los dos casos se debe ejecutar un log en consola que informe que se finalizó la operación.
e)
Ejecutar las promesas y definir como se debe comportar en cada caso (resuelto/rechazado)
*/

const alumno = require('./instituto').alumnos_instituto.alumnos

function validarCorrelativa(alumno) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (alumno.debeCorrelativa) {
                //resolve(`el alumno: ${alumno.nombre} tiene la correlativa aprobada`)
                reject(`el alumno: ${alumno.nombre} no tiene la correlativa aprobada`)
            } else {
                //reject(`el alumno: ${alumno.nombre} no tiene la correlativa aprobada`)
                resolve(`el alumno: ${alumno.nombre} tiene la correlativa aprobada`)
            }
        }, 2000)
    })
}

function inscribirAlumno(alumno, materia) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            alumno.inscriptoAMaterias.push(materia)
            resolve(alumno)
        }, 5000)
    })
}

//let alumnoPrueba = alumno[0]
//let materiaPrueba = "Desarrollo de aplicaciones web - Backend"



function ejecutarInscripcion(alumno, materia) {
    validarCorrelativa(alumno)
        .then(response => {
            console.log("Entrando al .then de validarCorrelativa.")
            return inscribirAlumno(alumno, materia)
        })
        .then(response => {
            console.log("Entrando al .then de inscribirAlumno.")
            console.log(response)
        })
        .catch(error => {
            console.log("el error es :", error)
        })
}

module.exports = { ejecutarInscripcion }
