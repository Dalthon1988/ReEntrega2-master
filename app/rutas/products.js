const express = require('express')

const fs = require('fs');

const controlador = require('../controladores/products')


const rutas = express.Router()





const path = 'productos'


rutas.get (
   `/${path}`,
    controlador.getData  
)

module.exports = rutas