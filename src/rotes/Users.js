const router = require('express-promise-router')();
const userController = require('../controllers/users');

// ==> Definindo as rotas do CRUD - 'Users':

// ==> Rota responsável por criar um novo 'User': (POST): localhost:3000/api/users
router.post('/users', userController.createUsers);
router.get('/users', userController.listAllUsers);
// ==> Rota responsável por selecionar 'User' pelo 'CEF': (GET): localhost:3000/api/users/:cpf
router.get('/users/:cpf', userController.findUserById);
// ==> Rota responsável por atualizar 'User' pelo 'CPF': (PUT): localhost: 3000/api/users/:cpf
router.put('/users/:cpf', userController.updateUserById);

module.exports = router;

