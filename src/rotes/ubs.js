const router = require('express-promise-router')();
const ubsController = require('../controllers/ubs');

// ==> Definindo as rotas do CRUD - 'ubs':

// ==> Rota responsável por criar um novo 'Endereço': (POST): localhost:3000/api/ubs
router.post('/ubs', ubsController.createUbs);

// ==> Rota responsável por listar todos os 'Endereço': (GET): localhost:3000/api/ubs
router.get('/ubs', ubsController.listAllUbs);

// ==> Rota responsável por filtrar ubs por nome 'Endereço': (GET): localhost:3000/api/ubs
router.get('/ubs/nome/:nomeUbs', ubsController.listUbsName);

// ==> Rota responsável por selecionar 'Endereço' pelo 'id': (GET): localhost:3000/api/ubs/:id
router.get('/ubs/:id', ubsController.findUbsById);

// ==> Rota responsável por atualizar 'Endereço' pelo 'id': (PUT): localhost: 3000/api/ubs/:id
router.put('/ubs/:id', ubsController.updateUbsById);

// ==> Rota responsável por excluir 'ubs' pelo 'Id': (DELETE): localhost:3000/api/ubs/:id
router.delete('/ubs/:id', ubsController.deleteUbsById);

module.exports = router;
