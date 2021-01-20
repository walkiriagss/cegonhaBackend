const router = require('express-promise-router')();
const rolesController = require('../controllers/role');

// ==> Definindo as rotas do CRUD - 'role':

// ==> Rota responsável por criar um novo 'role': (POST): localhost:3000/api/role
router.post('/role', rolesController.createRole);

// ==> Rota responsável por listar todos os 'role': (GET): localhost:3000/api/role
router.get('/role', rolesController.listAllRoles);

// ==> Rota responsável por selecionar 'role' pelo 'id': (GET): localhost:3000/api/role/:id
router.get('/role/:id', rolesController.findRoleById);

// ==> Rota responsável por atualizar 'role' pelo 'id': (PUT): localhost: 3000/api/role/:id
router.put('/role/:id', rolesController.updateRoleById);

// ==> Rota responsável por excluir 'role' pelo 'Id': (DELETE): localhost:3000/api/role/:id
router.delete('/role/:id', rolesController.deleteRolesById);

module.exports = router;