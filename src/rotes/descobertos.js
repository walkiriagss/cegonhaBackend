const router = require('express-promise-router')();
const regiaoController = require('../controllers/descobertos.js');

// ==> Definindo as rotas do CRUD - 'Descobertos':

// ==> Rota responsável por criar um novo 'Região Descoberta': (POST): localhost:3000/api/regiao
router.post('/regiao', regiaoController.createRegiaoDescoberta);

// ==> Rota responsável por listar todos 'Endereço': (GET): localhost:3000/api/regiao
router.get('/regiao', regiaoController.listAllRegiaoDescoberta);

// ==> Rota responsável por selecionar 'Endereço' pelo 'id': (GET): localhost:3000/api/regiao/:id
router.get('/regiao/:id', regiaoController.findRegiaoDescobertaById);

// ==> Rota responsável por atualizar 'Endereço' pelo 'id': (PUT): localhost: 3000/api/regiao/:id
router.put('/regiao/:id', regiaoController.updateRegiaoDescobertaById);

module.exports = router;