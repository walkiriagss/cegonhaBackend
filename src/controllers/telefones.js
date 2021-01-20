const db = require('../config/database');

// ==> Método responsável por criar um novo 'Telefone':
exports.createTelefone = async (req, res) => {
  const {nome, ddd, numero, obs} = req.body;

  const {rows} = await db.query(
    'INSERT INTO telefones (nome, ddd, numero, obs) VALUES ($1, $2, $3, $4) RETURNING id',
    [nome, ddd, numero, obs],
  );
  const id = rows[0].id;
  res.status(201).send({
    telefone: {nome, ddd, numero, obs, id},
  });
};

// ==> Método responsável por listar todos os 'Telefones':
exports.listAllTelefones = async (req, res) => {
  const response = await db.query('SELECT * FROM telefones ');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Telefone' pelo 'id':
exports.findTelefoneById = async (req, res) => {
  const id = req.params.id;
  const response = await db.query('SELECT * FROM telefones WHERE id = $1', [
    id,
  ]);
  res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'Telefone' pelo 'id':
exports.updateTelefoneById = async (req, res) => {
  const id = req.params.id;
  const {nome, ddd, numero, obs} = req.body;

  const response = await db.query(
    'UPDATE telefones SET nome = $1, ddd = $2, numero = $3, obs = $4 WHERE id = $5',
    [nome, ddd, numero, obs, id],
  );

  res.status(200).send({message: 'Atualização realizada com sucesso!'});
};

// ==> Método responsável por excluir um 'Telefone' pelo 'Id':
exports.deleteTelefoneById = async (req, res) => {
  const telefoneId = parseInt(req.params.id);
  await db.query('DELETE FROM telefones WHERE id = $1', [telefoneId]);

  res.status(200).send({message: 'Telefone deleted successfully!', telefoneId});
};

