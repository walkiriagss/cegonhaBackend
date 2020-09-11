const router = require('express-promise-router')();
const telefoneController = require('../controllers/telefones.js');

// ==> Definindo as rotas do CRUD - 'Telefones':

// ==> Rota responsável por criar um novo 'Telefone': (POST): localhost:3000/api/telefone
router.post('/telefone', telefoneController.createTelefone);

// ==> Rota responsável por listar todos 'Telefone': (GET): localhost:3000/api/telefone
router.get('/telefone', telefoneController.listAllTelefones);

// ==> Rota responsável por selecionar 'Telefone' pelo 'id': (GET): localhost:3000/api/telefone/:id
router.get('/telefone/:id', telefoneController.findTelefoneById);

// ==> Rota responsável por atualizar 'Telefone' pelo 'id': (PUT): localhost: 3000/api/telefone/:id
router.put('/telefone/:id', telefoneController.updateTelefoneById);

// ==> Rota responsável por excluir 'Telefone ' pelo 'Id': (DELETE): localhost:3000/api/telefone/:id
router.delete('/telefone/:id', telefoneController.deleteTelefoneById);

module.exports = router;
