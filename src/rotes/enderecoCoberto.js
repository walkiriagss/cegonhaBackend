const router = require('express-promise-router')();
const enderecoCobertoController = require('../controllers/enderecoCobertura.js');

// ==> Definindo as rotas do CRUD - 'Endereço':

// ==> Rota responsável por criar um novo 'Endereço Cobertura': (POST): localhost:3000/api/cobertos
router.post('/cobertos', enderecoCobertoController.createEnderecoCoberto);

// ==> Rota responsável por listar todos os 'Endereço Cobertura': (GET): localhost:3000/api/cobertos
router.get('/cobertos', enderecoCobertoController.listAllEsderecosCoberto);

// ==> Rota responsável por selecionar 'Endereço Cobertura' pelo 'id': (GET): localhost:3000/api/cobertos/:id
router.get('/cobertos/:id', enderecoCobertoController.findEnderecoCobertoById);

// ==> Rota responsável por atualizar 'Endereço Cobertura' pelo 'id': (PUT): localhost: 3000/api/cobertos/:id
router.put('/cobertos/:id', enderecoCobertoController.updateEnderecoById);

// ==> Rota responsável por excluir 'Endereço Cobertura' pelo 'Id': (DELETE): localhost:3000/api/cobertos/:id
router.delete('/cobertos/:id', enderecoCobertoController.deleteEnderecoCobertoById);

module.exports = router;
