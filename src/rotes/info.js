const router = require('express-promise-router')();
const infoController = require('../controllers/info.js');

// ==> Definindo as rotas do CRUD - 'info':

// ==> Rota responsável por criar um novo 'info': (POST): localhost:3000/api/info
router.post('/info', infoController.createInfo);

// ==> Rota responsável por listar todos 'info': (GET): localhost:3000/api/info
router.get('/info', infoController.listAllInfo);

// ==> Rota responsável por selecionar 'info' pelo 'id': (GET): localhost:3000/api/info/:id
router.get('/info/:id', infoController.findInfoById);

// ==> Rota responsável por atualizar 'info' pelo 'id': (PUT): localhost: 3000/api/info/:id
router.put('/info/:id', infoController.updateInfoById);

// ==> Rota responsável por excluir 'info ' pelo 'Id': (DELETE): localhost:3000/api/info/:id
router.delete('/info/:id', infoController.deleteInfoById);

module.exports = router;
