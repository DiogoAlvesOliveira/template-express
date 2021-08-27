const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');



route.get('/', homeController.pageHome);
route.post('/', homeController.pagePostHome);

route.get('/contato', contatoController.pageHome);

module.exports = route;