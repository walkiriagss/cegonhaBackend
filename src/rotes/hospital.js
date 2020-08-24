const router = require('express-promise-router')();
const hospitalController = require('../controllers/hospital.js');

// ==> Definindo as rotas do CRUD - 'Endereço':

// ==> Rota responsável por criar um novo 'Endereço': (POST): localhost:3000/api/endereco
router.post('/hospital', hospitalController.createHospital);
router.get('/hospital', hospitalController.listAllHospital);
// ==> Rota responsável por selecionar 'Endereço' pelo 'id': (GET): localhost:3000/api/endereco/:id
router.get('/hospital/:id', hospitalController.findHospitalById);
// ==> Rota responsável por atualizar 'Endereço' pelo 'id': (PUT): localhost: 3000/api/endereco/:id
router.put('/hospital/:id', hospitalController.updateHospitalById);

module.exports = router;