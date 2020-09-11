const db = require('../config/database');
const express = require('express');
// ==> Método responsável por criar um novo 'Login':

exports.createLogin = async (req, res) => {
  try {
    const nome = req.body.nome;
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    const cpf = req.body.cpf;

    const ehUnico = 'SELECT * FROM login WHERE usuario = $1';
    const cpfUnico = 'SELECT * FROM login WHERE cpf = $1';
    db.query(ehUnico, [usuario]).then(function(resultadoDaConsulta) {
      if (resultadoDaConsulta.rows.length > 0) {
        return res.status(400).send({error: 'Usuário já cadastrado'});
      }
    });
    db.query(cpfUnico, [cpf]).then(function(resultadoDaConsultaCpf) {
      if (resultadoDaConsultaCpf.rows.length > 0) {
        return res.status(400).send({error: 'CPF já cadastrado'});
      }
    });
    const {rows} = await db.query(
      'INSERT INTO login (nome, usuario, senha, cpf) VALUES ($1, $2, $3, $4)',
      [nome, usuario, senha, cpf],
    );
    res.status(201).send({
      login: {nome, usuario, senha, cpf},
    });
  } catch (err) {
    return res.status(400).send({error: 'Registration failed'});
  }
};

// ==> Método responsável por listar todos os 'Login':
exports.listAllLogin = async (req, res) => {
  const response = await db.query('SELECT * FROM login ORDER BY nome ASC ');
  res.status(200).send(response.rows);
};
// ==> Método responsável por validar se o usuário pode fazer login:
exports.authenticate = async (req, res) => {
  try {
    const usuario = req.body.usuario;
    const senha = req.body.senha;

    const ehUnico = 'SELECT * FROM login WHERE usuario = $1';
    await db.query(ehUnico, [usuario]).then(function(resultadoDaConsulta) {
      if (resultadoDaConsulta.rows.length == 0) {
        return res.status(400).send({error: 'Usuário Não encontrado'});
      } else {
        if (resultadoDaConsulta.rows[0].senha !== senha) {
          return res.status(400).send({error: 'Senha Inválida'});
        } else {
          res.send(resultadoDaConsulta.rows[0]);
        }
      }
    });
  } catch (err) {
    return res.status(400).send({error: 'Registration failed'});
  }
};

// ==> Método responsável por excluir um 'login' pelo 'Id':
exports.deleteLoginById = async (req, res) => {
  const loginId = parseInt(req.params.id);
  await db.query('DELETE FROM login WHERE id = $1', [
   loginId
  ]);

  res.status(200).send({ message: 'Login deleted successfully!', loginId });
};
