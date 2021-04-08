CREATE TABLE roles 
(
    id serial NOT NULL,
    role varchar(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE login
(
    id serial NOT NULL,
    nome varchar(50) NOT NULL,
    cpf varchar(14) NOT NULL,
    usuario varchar(255) NOT NULL,
    senha varchar(255) NOT NULL,   
    id_role integer,
    PRIMARY KEY (id),
    UNIQUE (cpf, usuario),
    FOREIGN KEY (id_role) REFERENCES roles(id)
);

CREATE TABLE endereco
(
    id serial NOT NULL,
    rua varchar(50),
    numero integer,
    bairro varchar(50),
    cidade varchar(20),
    estado varchar(20),
    cep varchar(20),
    PRIMARY KEY (id)
);

CREATE TABLE users
(
    id serial NOT NULL,
    nome varchar(50) NOT NULL,
    cpf varchar(14) NOT NULL,
    data_nascimento varchar(10),
    numero_cartao_sus varchar(50),
    telefone varchar(13),
    celular varchar(14),
    email varchar(50),
    id_endereco integer,
    UNIQUE (cpf),
    FOREIGN KEY (id_endereco) REFERENCES endereco(id),
    PRIMARY KEY (id)
);

CREATE TABLE centro_medico
(
    id serial NOT NULL,
    nome varchar(50) NOT NULL,
    telefone varchar(10),
    id_endereco integer NOT NULL,
    tipo varchar(50) NOT NULL,
    latitude real,
    longitude real,
    foto varchar(255),
    PRIMARY KEY (id),
    FOREIGN KEY (id_endereco) REFERENCES endereco(id)
);


CREATE TABLE enderecoCobertura
(
    id serial NOT NULL,
    rua varchar(255) NOT NULL,
    numero_inicio integer NOT NULL,
    numero_fim integer NOT NULL,
    bairro varchar(255) NOT NULL,
    cidade varchar(255) NOT NULL,
    estado varchar(255) NOT NULL,
    cep varchar(20) NOT NULL,
    id_centro_medico integer,
    PRIMARY KEY (id),
    FOREIGN KEY (id_centro_medico) REFERENCES centro_medico(id)
);

CREATE TABLE descobertos
(
    id serial NOT NULL,
    bairro varchar(255) NOT NULL,
    regiao varchar(255) NOT NULL,
    id_centro_medico integer,
    FOREIGN KEY (id_centro_medico) REFERENCES centro_medico(id),
    PRIMARY KEY (id)
);

CREATE TABLE telefones
(
    id serial NOT NULL,
    nome varchar(255) NOT NULL,
    ddd varchar(2) NOT NULL,
    numero varchar(9) ,
    obs varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE info
(
    id serial NOT NULL,
    tema varchar(255) NOT NULL,
    titulo varchar(255) NOT NULL,
    texto text NOT NULL,
    PRIMARY KEY (id)
);
