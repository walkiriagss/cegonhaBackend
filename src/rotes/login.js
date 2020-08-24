const router = require('express-promise-router')();
const loginController = require('../controllers/login');

// ==> Definindo as rotas do CRUD - 'Login':

// ==> Rota responsável por criar um novo 'login': (POST): localhost:3000/api/login
router.post('/login', loginController.createLogin);

// ==> Rota responsável por listar todos os 'logins': (GET): localhost:3000/api/login
router.get('/login', loginController.listAllLogin);

// ==> Rota responsável autenticarum 'login': (POST): localhost:3000/api/Login
router.post('/login/authenticate', loginController.authenticate);

module.exports = router;