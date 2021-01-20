const db = require('../config/database');

// ==> Método responsável por criar um novo 'role':

exports.createRole = async (req, res) => {
  const {role} = req.body;
  const {rows} = await db.query(
    'INSERT INTO roles (role) VALUES ($1)',
    [role],
  );
  res.status(201).send({
    roles: {role},
  });
};
// ==> Método responsável por listar todos os 'roles':
exports.listAllRoles = async (req, res) => {
  const response = await db.query('SELECT * FROM roles ORDER BY role ASC ');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'role' pelo 'id':
exports.findRoleById = async (req, res) => {
  const id = req.params.id;
  const response = await db.query('SELECT * FROM roles WHERE id = $1', [id]);
  res.status(200).send(response.rows);
};
// ==> Método responsável por atualizar um 'roles' pelo 'id':
exports.updateRoleById = async (req, res) => {
  const id = req.params.id;
  const {role} = req.body;

  const response = await db.query(
    'UPDATE roles SET role = $1 WHERE id = $2',
    [role, id],
  );

  res.status(200).send({message: 'Atualização realizada com sucesso!'});
};
// ==> Método responsável por excluir um 'roles' pelo 'Id':
exports.deleteRolesById = async (req, res) => {
  const roleId = parseInt(req.params.id);
  await db.query('DELETE FROM roles WHERE id = $1', [roleId]);

  res.status(200).send({message: 'Role deleted successfully!', roleId});
};
