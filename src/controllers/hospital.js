const db = require('../config/database');

// ==> Método responsável por criar um novo 'hospital':

exports.createHospital = async (req, res) => {
  const {nome, telefone, id_endereco, latitude, longitude} = req.body;
  const {rows} = await db.query(
    'INSERT INTO hospital (nome, telefone, id_endereco, latitude, longitude) VALUES ($1, $2, $3, $4, $5)',
    [nome, telefone, id_endereco, latitude, longitude],
  );
  res.status(201).send({
    hospital: {nome, telefone, id_endereco, latitude, longitude},
  });
};
// ==> Método responsável por filtrar 'hospital' por nome:
exports.listHospitalNome = async (req, res) => {
  const nomeHospital = req.params.nomeHospital;
  const response = await db.query(
    "SELECT * FROM hospital WHERE nome LIKE '%" +
      nomeHospital +
      "%' ORDER BY nome ASC ",
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por listar todos os 'hospital':
exports.listAllHospital = async (req, res) => {
  const response = await db.query("SELECT * FROM hospital ORDER BY nome ASC ",
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'hospital' pelo 'id':
exports.findHospitalById = async (req, res) => {
  const id = req.params.id;
  const response = await db.query('SELECT * FROM hospital WHERE id = $1', [id]);
  res.status(200).send(response.rows);
};
// ==> Método responsável por atualizar um 'hospital' pelo 'id':
exports.updateHospitalById = async (req, res) => {
  const id = req.params.id;
  const {nome, telefone, id_endereco, latitude, longitude} = req.body;

  const response = await db.query(
    'UPDATE hospital SET nome = $1, telefone = $2, id_endereco = $3, latitude = $4, longitude = $5 WHERE id = $6',
    [nome, telefone, id_endereco, latitude, longitude, id],
  );

  res.status(200).send({message: 'Atualização realizada com sucesso!'});
};
// ==> Método responsável por excluir um 'hospital' pelo 'Id':
exports.deleteHospitalById = async (req, res) => {
  const hospitalId = parseInt(req.params.id);
  await db.query('DELETE FROM hospital WHERE id = $1', [
   hospitalId
  ]);

  res.status(200).send({ message: 'Hospital deleted successfully!', hospitalId });
};