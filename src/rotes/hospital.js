const router = require('express-promise-router')();
const hospitalController = require('../controllers/hospital.js');

// ==> Definindo as rotas do CRUD - 'hospital':

// ==> Rota responsável por criar um novo 'hospital': (POST): localhost:3000/api/hospital
router.post('/hospital', hospitalController.createHospital);

// ==> Rota responsável por listar todos os 'hospital': (GET): localhost:3000/api/hospital
router.get('/hospital', hospitalController.listAllHospital);

// ==> Rota responsável por filtrar os 'hospital' por nome: (GET): localhost:3000/api/hospital/nome/:nome
router.get('/hospital/nome/:nomeHospital', hospitalController.listHospitalNome);

// ==> Rota responsável por selecionar 'hospital' pelo 'id': (GET): localhost:3000/api/hospital/:id
router.get('/hospital/:id', hospitalController.findHospitalById);

// ==> Rota responsável por atualizar 'hospital' pelo 'id': (PUT): localhost: 3000/api/hospital/:id
router.put('/hospital/:id', hospitalController.updateHospitalById);

// ==> Rota responsável por excluir 'hospital' pelo 'Id': (DELETE): localhost:3000/api/hospital/:id
router.delete('/hospital/:id', hospitalController.deleteHospitalById);

module.exports = router;
