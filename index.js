const express = require('express')
const alumnos = require('./src/instituto').alumnos_instituto.alumnos
const { ejecutarInscripcion } = require('./src/Inscripcion')
//const ejecutarInscripcion = require('./src/Inscripcion').ejecutarInscripcion
const HOSTNAME = '127.0.0.1'
const PORT = 3000

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Bienvenidos a la página principal")
})

app.get("/pepe", (req, res) => {
    res.status(200).send("Bienvenido a la página de pepe")
    alumnos
})

app.get("/pepe/nuevo", (req, res) => {
    res.status(200).send("Bienvenido a la página de pepe en /nuevo")
})

app.get("/alumnos", (req, res) => {
    //res.status(200).send(JSON.stringify(alumnos))
    res.status(200).json(alumnos)
})

app.get("/alumnos/:alumnoNombre", (req, res) => {
    try {
        const param = req.params.alumnoNombre;
        

        if (!alumnos) {
            return res.status(500).json({ error: "El listado de alumnos no está disponible" });
        }

        const alumnoEncontrado = alumnos.find(
            alumno => alumno.nombre.toLowerCase() === param.toLowerCase()
        );

        if (!alumnoEncontrado) {
            return res.status(404).json({ 
                error: `No se encontró el alumno con el nombre: ${param}` 
            });
        }

        ejecutarInscripcion(alumnoEncontrado, "Ingenieria de Software");

        res.status(200).json({ 
            message: "Inscripción realizada con éxito",
            alumno: alumnoEncontrado 
        });

    } catch (error) {
        console.error("Error al procesar la inscripción:", error);
        return res.status(500).json({ 
            error: "Hubo un error interno en el servidor al procesar la inscripción" 
        });
    }
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`El servidor esta corriendo en http://${HOSTNAME}:${PORT}`)
})


