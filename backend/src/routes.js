const express = require('express');
const connection = require('./database/connection')

const UsuarioController = require('./controllers/UsuarioController')

const routes = express.Router();


//Listar Usuarios
routes.get('/usuario', UsuarioController.listarUsuarios);

////Verifica se já existe email cadastrado
routes.post('/verificaEmail', UsuarioController.verificaEmail);

//Criar Usuarios
routes.post('/usuario', UsuarioController.criarUsuario);

//Deletar Usuarios
routes.delete('/usuario/:id', UsuarioController.deletarUsuario);

module.exports = routes; 
