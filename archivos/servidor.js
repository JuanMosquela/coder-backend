const express = require('express')

const producto = require('./archivos')




const app = express()

const PORT = 8080

app.get('/productos', (req, res) => {
    res.send(producto.getAll())
})

app.get('/productoRandom', (req, res) => {
    res.send(producto.getRandomProduct())
})

app.listen(PORT, (req, res) => {
    console.log(`escuchando al puerto ${PORT}`)

})