const db = require("../config/database");

// ==> Método responsável por criar uma nova 'Região descoberta':

exports.createRegiaoDescoberta = async (req, res) => {
  const {bairro, regiao, id_hospital, id_ubs } = req.body;

  const { rows } = await db.query(
    "INSERT INTO descobertos (bairro, regiao, id_hospital, id_ubs) VALUES ($1, $2, $3, $4) RETURNING id",
    [bairro, regiao, id_hospital, id_ubs],
  );
  const id = rows[0].id
  res.status(201).send({
      endereco: { bairro, regiao, id_hospital, id_ubs, id }
  });
};
// ==> Método responsável por listar todas as 'Região descoberta':
exports.listAllRegiaoDescoberta = async (req, res) => {
    const response = await db.query('SELECT * FROM descobertos ');
    res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Região descoberta' pelo 'id':
exports.findRegiaoDescobertaById = async (req, res) => {
  const id = req.params.id;
  const response = await db.query('SELECT * FROM descobertos WHERE id = $1', [id]);
  res.status(200).send(response.rows);
}
// ==> Método responsável por atualizar um 'Região descoberta' pelo 'id':
exports.updateRegiaoDescobertaById = async (req, res) => {
  const id = req.params.id;
  const { bairro, regiao, id_hospital, id_ubs} = req.body;
  
  const response = await db.query(
    "UPDATE descobertos SET bairro = $1, regiao = $2, id_hospital = $3, id_ubs = $4 WHERE id = $5",
    [bairro, regiao, id_hospital, id_ubs, id]
  );

  res.status(200).send({ message: "Atualização realizada com sucesso!" });
};