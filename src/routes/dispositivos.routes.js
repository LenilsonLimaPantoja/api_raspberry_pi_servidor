const express = require('express');

const routes = express.Router();

const dispositivosControllers = require('../controllers/dispositivos.controllers');

routes.get('/:identificador_balanca', dispositivosControllers.readDispositivo);

module.exports = routes;