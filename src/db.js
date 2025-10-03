//conecção com o banco 

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',       //seu usuario
    password: 'root',       //sua senha
    database: 'escola'  //nome do banco 
});

db.connect((err) => {
    if (err) {
        console.error('Erro de conexão:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
})

module.exports = db;