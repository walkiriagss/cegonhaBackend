const db = require("../config/database");

// ==> Método responsável por criar um novo 'hospital':

exports.createHospital = async (req, res) => {
  const { nome, telefone, id_endereco } = req.body;
  const { rows } = await db.query(
    "INSERT INTO hospital (nome, telefone, id_endereco) VALUES ($1, $2, $3)",
    [nome, telefone, id_endereco]
  );
  res.status(201).send({
    hospital: { nome, telefone, id_endereco }
  });
};
// ==> Método responsável por listar todos os 'hospital':
exports.listAllHospital = async (req, res) => {
    const response = await db.query('SELECT * FROM hospital ORDER BY nome ASC ');
    res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'hospital' pelo 'id':
exports.findHospitalById = async (req, res) => {
  const id = req.params.id;
  const response = await db.query('SELECT * FROM hospital WHERE id = $1', [id]);
  res.status(200).send(response.rows);
}
// ==> Método responsável por atualizar um 'hospital' pelo 'id':
exports.updateHospitalById = async (req, res) => {
  const id = req.params.id;
  const { nome, telefone, id_endereco} = req.body;
  
  const response = await db.query(
    "UPDATE hospital SET nome = $1, telefone = $2, id_endereco = $3 WHERE id = $4",
    [nome, telefone, id_endereco, id]
  );

  res.status(200).send({ message: "Atualização realizada com sucesso!" });
};