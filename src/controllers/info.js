const db = require('../config/database');

// ==> Método responsável por criar um novo 'Info':
exports.createInfo = async (req, res) => {
  const {tema, titulo, texto} = req.body;

  const {rows} = await db.query(
    'INSERT INTO info (tema, titulo, texto) VALUES ($1, $2, $3) RETURNING id',
    [tema, titulo, texto],
  );
  const id = rows[0].id;
  res.status(201).send({
    endereco: {tema, titulo, texto, id},
  });
};

// ==> Método responsável por listar todos os 'Info':
exports.listAllInfo = async (req, res) => {
  const response = await db.query('SELECT * FROM info ');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Info' pelo 'id':
exports.findInfoById = async (req, res) => {
  const id = req.params.id;
  const response = await db.query('SELECT * FROM info WHERE id = $1', [id]);
  res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'Info' pelo 'id':
exports.updateInfoById = async (req, res) => {
  const id = req.params.id;
  const {tema, titulo, texto} = req.body;

  const response = await db.query(
    'UPDATE info SET tema = $1, titulo = $2, texto = $3 WHERE id = $4',
    [tema, titulo, texto, id],
  );

  res.status(200).send({message: 'Atualização realizada com sucesso!'});
};

// ==> Método responsável por excluir um 'Info' pelo 'Id':
exports.deleteInfoById = async (req, res) => {
  const infoId = parseInt(req.params.id);
  await db.query('DELETE FROM info WHERE id = $1', [infoId]);

  res.status(200).send({message: 'Info deleted successfully!', infoId});
};

