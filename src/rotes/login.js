const router = require('express-promise-router')();
const loginController = require('../controllers/login');

// ==> Definindo as rotas do CRUD - 'Login':

// ==> Rota responsável por criar um novo 'login': (POST): localhost:3000/api/login
router.post('/login', loginController.createLogin);

// ==> Rota responsável por listar todos os 'logins': (GET): localhost:3000/api/login
router.get('/login', loginController.listAllLogin);

// ==> Rota responsável autenticarum 'login': (POST): localhost:3000/api/login/authenticate
router.post('/login/authenticate', loginController.authenticate);

// ==> Rota responsável por excluir 'login' pelo 'Id': (DELETE): localhost:3000/api/login/:id
router.delete('/login/:id', loginController.deleteLoginById);
module.exports = router;
