# sistemaDeLogin

create database integracao_api;<br>
use integracao_api;
 
drop table if exists usuarios;<br>
create table usuarios(
	id int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(150) unique not null,
    senha_hash varchar(255) not null,
    telefone varchar(20),
    data_nascimento date,
    genero ENUM('M','F','Outro'),
    endereco varchar(255),
    foto_perfil varchar(255),
    data_criacao datetime default current_timestamp,
    ultimo_login datetime,
    status tinyint default 1,
    role enum('user','admin','moderador') default 'user'
    );
