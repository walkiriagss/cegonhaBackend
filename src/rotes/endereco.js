const router = require('express-promise-router')();
const enderecoController = require('../controllers/endereco.js');

// ==> Definindo as rotas do CRUD - 'Endereço':

// ==> Rota responsável por criar um novo 'Endereço': (POST): localhost:3000/api/endereco
router.post('/endereco', enderecoController.createEndereco);

// ==> Rota responsável por listar todos 'Endereço': (GET): localhost:3000/api/endereco/
router.get('/endereco', enderecoController.listAllEsderecos);

// ==> Rota responsável por selecionar 'Endereço' pelo 'id': (GET): localhost:3000/api/endereco/:id
router.get('/endereco/:id', enderecoController.findEnderecoById);

// ==> Rota responsável por atualizar 'Endereço' pelo 'id': (PUT): localhost: 3000/api/endereco/:id
router.put('/endereco/:id', enderecoController.updateEnderecoById);

// ==> Rota responsável por selecionar 'Hospital' pelo 'endereço': (GET): localhost:3000/api/endereco/
router.post('/endereco/findhospital', enderecoController.findHospital);

module.exports = router;