const db = require('../config/database');

// ==> Método responsável por criar um novo 'Endereço Coberto':

exports.createEnderecoCoberto = async (req, res) => {
  const {
    rua,
    numero_inicio,
    numero_fim,
    bairro,
    cidade,
    estado,
    cep,
    id_centro_medico_parto, 
    id_centro_medico_pre_natal
  } = req.body;

  const {rows} = await db.query(
    'INSERT INTO enderecocobertura (rua, numero_inicio, numero_fim, bairro, cidade, estado, cep,  id_centro_medico_parto, id_centro_medico_pre_natal) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
    [
      rua,
      numero_inicio,
      numero_fim,
      bairro,
      cidade,
      estado,
      cep,
      id_centro_medico_parto, 
      id_centro_medico_pre_natal
    ],
  );

  res.status(201).send({
    enderecocobertura: {
      rua,
      numero_inicio,
      numero_fim,
      bairro,
      cidade,
      estado,
      cep,
      id_centro_medico_parto, 
      id_centro_medico_pre_natal
    },
  });
};
// ==> Método responsável por listar todos os 'Endereços':
exports.listAllEsderecosCoberto = async (req, res) => {
  const response = await db.query('SELECT * FROM enderecocobertura ');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Endereco' pelo 'id':
exports.findEnderecoCobertoById = async (req, res) => {
  const id = req.params.id;
  const response = await db.query(
    'SELECT * FROM enderecocobertura WHERE id = $1',
    [id],
  );
  res.status(200).send(response.rows);
};
// ==> Método responsável por atualizar um 'Endereço' pelo 'id':
exports.updateEnderecoById = async (req, res) => {
  const id = req.params.id;
  const {
    rua,
    numero_inicio,
    numero_fim,
    bairro,
    cidade,
    estado,
    cep,
    id_centro_medico_parto, 
    id_centro_medico_pre_natal
  } = req.body;

  const response = await db.query(
    'UPDATE enderecocobertura SET rua = $1, numero_inicio = $2, numero_fim = $3, bairro = $4, cidade = $5, estado = $6, cep = $7,  id_centro_medico_parto = $8, id_centro_medico_pre_natal = $9 WHERE id = $10',
    [
      rua,
      numero_inicio,
      numero_fim,
      bairro,
      cidade,
      estado,
      cep,
      id_centro_medico_parto, 
      id_centro_medico_pre_natal,
      id,
    ],
  );

  res.status(200).send({message: 'Atualização realizada com sucesso!'});
};

// ==> Método responsável por excluir um 'Endereço Coberto' pelo 'Id':
exports.deleteEnderecoCobertoById = async (req, res) => {
  const enderecoCobertoId = parseInt(req.params.id);
  await db.query('DELETE FROM enderecoCobertura WHERE id = $1', [
    enderecoCobertoId,
  ]);

  res
    .status(200)
    .send({message: 'Endereço deleted successfully!', enderecoCobertoId});
};
