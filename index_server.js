const e = require('express');
const express = require('express')

const HOSTNAME = '127.0.0.1';
const PORT = 3000


const routerFrontend = require('./Routers/frontendRouter')
const routerBackend = require('./Routers/backendRouter')
const routerPrincipalApi = require('./Routers/principalRouter')


const app = express()

//Routers:
app.use('/api/lenguajes/frontend', routerFrontend)
app.use('/api/lenguajes/backend', routerBackend)
app.use('/api', routerPrincipalApi)
 

app.listen(PORT, HOSTNAME, () => {
    console.log(`El servidor está corriendo en http://${HOSTNAME}:${PORT}/`)
})
