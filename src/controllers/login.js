const db = require('../config/database');
const bcrypt = require('bcryptjs'); //criptografia de senha
const express = require('express');

const { response } = require('express');
const saltRounds = 10 //Definindo o valor de caracteres:
// ==> Método responsável por criar um novo 'Login':
const salt = bcrypt.genSaltSync(saltRounds)//Criando o salt:
exports.createLogin = async (req, res) => {
  try {
    const nome = req.body.nome;
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    const cpf = req.body.cpf;
    const id_role = req.body.id_role
     
   // a criptografia é realizada através da aplicação de algoritmos 
   // matemáticos que modificam qualquer bloco de dados em 
    //caracteres de comprimento fixos, transformando-os em hashes
    
    const hash = bcrypt.hashSync(senha, salt) //Criando o hash:  
    const errors = []
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
    if ( !id_role || id_role.length === 0 || id_role >2){
      errors.push ({error:'Invalid Roles'})
    }
    if (errors.length > 0) {
      return res.status(400).json(errors)}
    
      const {rows} = await db.query(
        'INSERT INTO login (nome, usuario, senha, cpf, id_role) VALUES ($1, $2, $3, $4, $5)',
        [nome, usuario, hash, cpf, id_role],
      );
      res.status(201).send({
        login: {nome, usuario, hash, cpf, id_role},
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
 
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    const ehUnico = 'SELECT * FROM login WHERE usuario = $1';
    await db.query(ehUnico, [usuario]).then(function(resultadoDaConsulta) {
      if (resultadoDaConsulta.rows.length == 0) {
        return res.status(400).send({error: 'Usuário Não encontrado'});
      } else {
        
        let boll =  bcrypt.compareSync(senha, resultadoDaConsulta.rows[0].senha)
        if (boll == true) {
          const SECRET_KEY = process.env.SECRET_KEY
          if(!SECRET_KEY){
            return res.status(401).json({error: "Enviroment SECRET_KEY is empty"})
          }
        try{
          const token = jwt.sign(resultadoDaConsulta.rows[0], SECRET_KEY, {expiresIn: '24h'}); //o token irá expirar em 24 horas
          res.status(200).send({
            token: token,
            usuario: resultadoDaConsulta.rows[0]
          });
        }
        catch(error){
          res.status(500).json({error: 'jwt.sign() is not working'})
        }

        } else {
          return res.status(400).send({error: 'Senha Inválida'});
        }
      }
      console.log("resultadoConsulta:", resultadoDaConsulta.rows)
    }); 
   
};

// ==> Método responsável por verificar se o token é válido
exports.verifyToken = async (req, res) => {
  const {token} = req.body
  const SECRET_KEY = process.env.SECRET_KEY
  if(!SECRET_KEY){
    return res.status(401).json({error: "Enviroment SECRET_KEY is empty"})
  }
  try{
    if(token){
      jwt.verify(token, SECRET_KEY)
      ? res.json({status: true})
      : res.json({status:false})
    }
    else{
      res.json({status: false})
    }
  } catch (error){
    return res.status(500).json({error: 'jwt.sign() is not working'})
  }
}

// ==> Método responsável por excluir um 'login' pelo 'Id':
exports.deleteLoginById = async (req, res) => {
  const loginId = parseInt(req.params.id);
  await db.query('DELETE FROM login WHERE id = $1', [loginId]);

  res.status(200).send({message: 'Login deleted successfully!', loginId});
};
