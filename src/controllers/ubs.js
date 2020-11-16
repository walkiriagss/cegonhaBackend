const db = require("../config/database");

// ==> Método responsável por criar um novo 'Ubs':

exports.createUbs = async (req, res) => {
  const { nome, telefone, id_endereco, latitude, longitude} = req.body;
  const { rows } = await db.query(
    "INSERT INTO ubs (nome, telefone, id_endereco, latitude, longitude) VALUES ($1, $2, $3, $4, $5)",
    [nome, telefone, id_endereco, latitude, longitude]
  );
  res.status(201).send({
    ubs: { nome, telefone, id_endereco, latitude, longitude }
  });
};
// ==> Método responsável por listar todos os 'ubs':
exports.listAllUbs = async (req, res) => {
    const response = await db.query('SELECT * FROM ubs ORDER BY nome ASC ');
    res.status(200).send(response.rows);
};
// ==>Método responsável por filtrar ubs por nome
exports.listUbsName = async (req, res) => {
  const nomeUbs = req.params.nomeUbs;
  const response = await db.query( "SELECT * FROM ubs WHERE nome LIKE '%" +nomeUbs +"%' ORDER BY nome ASC ",);
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'ubs' pelo 'id':
exports.findUbsById = async (req, res) => {
  const id = req.params.id;
  const response = await db.query('SELECT * FROM ubs WHERE id = $1', [id]);
  res.status(200).send(response.rows);
}
// ==> Método responsável por atualizar um 'ubs' pelo 'id':
exports.updateUbsById = async (req, res) => {
  const id = req.params.id;
  const { nome, telefone, id_endereco, latitude, longitude} = req.body;
  
  const response = await db.query(
    "UPDATE ubs SET nome = $1, telefone = $2, id_endereco = $3, latitude = $4, longitude = $5 WHERE id = $6",
    [nome, telefone, id_endereco, latitude, longitude, id]
  );

  res.status(200).send({ message: "Atualização realizada com sucesso!" });
};
// ==> Método responsável por excluir um 'UBS' pelo 'Id':
exports.deleteUbsById = async (req, res) => {
  const ubsId = parseInt(req.params.id);
  await db.query('DELETE FROM ubs WHERE id = $1', [
    ubsId
  ]);

  res.status(200).send({ message: 'Ubs deleted successfully!', ubsId });
};