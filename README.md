# sistemaDeLogin
## Banco de Dados:

create database integracao_api;<br>
use integracao_api;
 
drop table if exists usuarios;<br>
create table usuarios(<br>
	id int auto_increment primary key,<br>
    nome varchar(100) not null,<br>
    email varchar(150) unique not null,<br>
    senha_hash varchar(255) not null,<br>
    telefone varchar(20),<br>
    data_nascimento date,<br>
    genero ENUM('M','F','Outro'),<br>
    endereco varchar(255),<br>
    foto_perfil varchar(255),<br>
    data_criacao datetime default current_timestamp,<br>
    ultimo_login datetime,<br>
    status tinyint default 1,<br>
    role enum('user','admin','moderador') default 'user'<br>
    );
