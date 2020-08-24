const db = require("../config/database");

// ==> Método responsável por criar um novo 'Users':

exports.createUsers = async (req, res) => {
  const { nome, data_nascimento, telefone, cpf, numero_cartao_sus, celular, email, id_endereco } = req.body;

  const cpfUnico = 'SELECT * FROM users WHERE cpf = $1';
  db.query(cpfUnico,[cpf])
  .then(function (resultadoDaConsultaCpf) {
    if(resultadoDaConsultaCpf.rows.length > 0){
      return res.status(400).send({error: "CPF já cadastrado"})
    }           
  })

  const { rows } = await db.query(
    "INSERT INTO users (nome, data_nascimento, telefone, cpf, numero_cartao_sus, celular, email, id_endereco) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [nome,data_nascimento, telefone, cpf, numero_cartao_sus, celular, email, id_endereco]
  );
  
  res.status(201).send({
      user: { nome, data_nascimento, telefone, cpf, numero_cartao_sus, celular, email, id_endereco}
  });
};
// ==> Método responsável por listar todos os 'Users':
exports.listAllUsers = async (req, res) => {
    const response = await db.query('SELECT * FROM users ORDER BY nome ASC ');
    res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Users' pelo 'cpf':
exports.findUserById = async (req, res) => {
  const cpf = req.params.cpf;
  const response = await db.query('SELECT * FROM users WHERE cpf = $1', [cpf]);
  res.status(200).send(response.rows);
}
// ==> Método responsável por atualizar um 'User' pelo 'cpf':
exports.updateUserById = async (req, res) => {
  const cpf = req.params.cpf;
  const { nome, data_nascimento, telefone, numero_cartao_sus, celular, email, id_endereco} = req.body;
  
  const response = await db.query(
    "UPDATE users SET nome = $1, data_nascimento = $2, telefone = $3, numero_cartao_sus = $4, celular = $5, email = $6, id_endereco = $7 WHERE cpf = $8",
    [nome, data_nascimento, telefone, numero_cartao_sus, celular, email, id_endereco, cpf]
  );

  res.status(200).send({ message: "Atualização realizada com sucesso!" });
};
