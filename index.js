//Menempelkan Expressjs
const express = require('express');
const app = express();

//Mengkoneksikan Dengan HTML
const path = require('path')
const hbs = require('hbs')
app.set('views', path.join(__dirname))
app.set('view engine', 'hbs')

//Mengkoneksikan Dengan Database
const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lsp"
});

//Routing
app.get('/',function(r,s){
    sql = "SELECT * FROM tuk";
    db.query(sql, function(e, qry){
        s.render('tuk',{
            judul:'DATA TUK',
            items:qry
        });
    })
});

app.get('/lsp',function(r,s){
    sql = "Select * From lsp";
    db.query(sql, function(e, qry){
        s.render('lsp',{
            judul:'DATA LSP',
            items:qry
        });
    })
});

//Membuat Port Koneksi
app.listen(1000,function(){

});
