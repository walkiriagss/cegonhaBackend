const router = require('express-promise-router')();
const regiaoController = require('../controllers/descobertos.js');

// ==> Definindo as rotas do CRUD - 'Descobertos':

// ==> Rota responsável por criar uma nova 'Região Descoberta': (POST): localhost:3000/api/regiao
router.post('/regiao', regiaoController.createRegiaoDescoberta);

// ==> Rota responsável por listar todas regiões 'descobertos': (GET): localhost:3000/api/regiao
router.get('/regiao', regiaoController.listAllRegiaoDescoberta);

// ==> Rota responsável por selecionar 'descobertos' pelo 'id': (GET): localhost:3000/api/regiao/:id
router.get('/regiao/:id', regiaoController.findRegiaoDescobertaById);

// ==> Rota responsável por atualizar 'descobertos' pelo 'id': (PUT): localhost: 3000/api/regiao/:id
router.put('/regiao/:id', regiaoController.updateRegiaoDescobertaById);

// ==> Rota responsável por excluir 'descobertos' pelo 'Id': (DELETE): localhost:3000/api/regiao/:id
router.delete('/regiao/:id', regiaoController.deleteEnderecoDescobertoById);

module.exports = router;
