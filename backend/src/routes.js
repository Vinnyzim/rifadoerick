const express = require('express');
const connection = require('./database/connection')

const UsuarioController = require('./controllers/UsuarioController')

const routes = express.Router();


//Listar Usuarios
routes.get('/usuario', UsuarioController.listarUsuarios);

//Criar Usuarios
routes.post('/usuario', UsuarioController.criarUsuario);

//Deletar Usuarios
routes.delete('/usuario/:id', UsuarioController.deletarUsuario);

module.exports = routes; 
