const router = require('express-promise-router')();
const userController = require('../controllers/users');

// ==> Definindo as rotas do CRUD - 'Users':

// ==> Rota responsável por criar um novo 'User': (POST): localhost:3000/api/users
router.post('/users', userController.createUsers);

// ==> Rota responsável por listar todos os 'User': (GET): localhost:3000/api/users
router.get('/users', userController.listAllUsers);

// ==> Rota responsável por selecionar 'User' pelo 'CEP': (GET): localhost:3000/api/users/:cpf
router.get('/users/:cpf', userController.findUserById);

// ==> Rota responsável por atualizar 'User' pelo 'CPF': (PUT): localhost: 3000/api/users/:cpf
router.put('/users/:cpf', userController.updateUserById);

// ==> Rota responsável por excluir 'User' pelo 'Id': (DELETE): localhost:3000/api/users/:id
router.delete('/users/:id', userController.deleteUserById);

module.exports = router;
