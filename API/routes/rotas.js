var express = require('express');
var rota = express.Router();

var userController = require("../controllers/usuarios_controller");

rota.get('/usuarios', userController.listarUsuarios);
rota.post('/usuario', userController.criarUsuario);
rota.post('/login',userController.login);




module.exports = rota;