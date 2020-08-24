const router = require('express-promise-router')();
const enderecoCobertoController = require('../controllers/enderecoCobertura.js');

// ==> Definindo as rotas do CRUD - 'Endereço':

// ==> Rota responsável por criar um novo 'Endereço': (POST): localhost:3000/api/endereco
router.post('/cobertos', enderecoCobertoController.createEnderecoCoberto);
router.get('/cobertos', enderecoCobertoController.listAllEsderecosCoberto);
// ==> Rota responsável por selecionar 'Endereço' pelo 'id': (GET): localhost:3000/api/endereco/:id
router.get('/cobertos/:id', enderecoCobertoController.findEnderecoCobertoById);
// ==> Rota responsável por atualizar 'Endereço' pelo 'id': (PUT): localhost: 3000/api/endereco/:id
router.put('/cobertos/:id', enderecoCobertoController.updateEnderecoById);

module.exports = router;