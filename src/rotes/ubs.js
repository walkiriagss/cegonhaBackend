const router = require('express-promise-router')();
const ubsController = require('../controllers/ubs');

// ==> Definindo as rotas do CRUD - 'Endereço':

// ==> Rota responsável por criar um novo 'Endereço': (POST): localhost:3000/api/endereco
router.post('/ubs', ubsController.createUbs);
router.get('/ubs', ubsController.listAllUbs);
// ==> Rota responsável por selecionar 'Endereço' pelo 'id': (GET): localhost:3000/api/endereco/:id
router.get('/ubs/:id', ubsController.findUbsById);
// ==> Rota responsável por atualizar 'Endereço' pelo 'id': (PUT): localhost: 3000/api/endereco/:id
router.put('/ubs/:id', ubsController.updateUbsById);

module.exports = router;