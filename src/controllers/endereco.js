const db = require("../config/database");

// ==> Método responsável por criar um novo 'Endereço':

exports.createEndereco = async (req, res) => {
  const { rua, numero, bairro, cidade, estado, cep } = req.body;
  
  const { rows } = await db.query(
    "INSERT INTO endereco (rua, numero, bairro, cidade, estado, cep) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
    [rua, numero, bairro, cidade, estado, cep],
  );
  const idEnd = rows[0].id
  res.status(201).send({
      endereco: { rua, numero, bairro, cidade, estado, cep, idEnd }
  });
};
// ==> Método responsável por listar todos os 'Endereços':
exports.listAllEsderecos = async (req, res) => {
    const response = await db.query('SELECT * FROM endereco ');
    res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Endereco' pelo 'id':
exports.findEnderecoById = async (req, res) => {
  const id = req.params.id;
  const response = await db.query('SELECT * FROM endereco WHERE id = $1', [id]);
  res.status(200).send(response.rows);
}
// ==> Método responsável por atualizar um 'Endereço' pelo 'id':
exports.updateEnderecoById = async (req, res) => {
  const id = req.params.id;
  const { rua, numero, bairro, cidade, estado, cep} = req.body;
  
  const response = await db.query(
    "UPDATE endereco SET rua = $1, numero = $2, bairro = $3, cidade = $4, estado = $5, cep = $6 WHERE id = $7",
    [rua, numero, bairro, cidade, estado, cep, id]
  );

  res.status(200).send({ message: "Atualização realizada com sucesso!" });
};
// ==> Método responsável por selecionar uma 'Célula' pelo endereço:
exports.findHospital = async (req, res) => {
    const rua = req.body.rua;
    const numero = req.body.numero;
    const cep = req.body.cep;
    const bairro = req.body.bairro;

    const response = await db.query('SELECT * FROM enderecocobertura WHERE rua = $1 and numero_inicio <= $2 and numero_fim >= $2 and cep = $3', 
    [rua, numero, cep]);
      if(response.rows.length > 0)
        res.status(200).send(response.rows);
      else{
        const response2 = await db.query('SELECT * FROM descobertos WHERE bairro = $1', 
        [bairro]);
          res.status(200).send(response2.rows);
      }
  }
