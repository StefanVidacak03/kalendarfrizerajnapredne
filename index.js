var express = require('express');
var mysql = require('mysql2');
var ejs = require('ejs');
var https = require('https');
const { getMaxListeners } = require('process');
const { rootCertificates } = require('tls');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'St3f@n!!',
    database: 'frizeraj'
});

connection.connect();
app.use(express.static('views'));
app.set('view engine', 'ejs');

//app.get('/', (req, res) => {
  //  res.render('index');
//});


 app.get('/', (req, res) => {

     connection.query('SELECT * from klijent', function (err, result) {
         if (err) throw err;
         res.render('index', { REZULTAT: result });
         if(err) throw err;
         console.log(result);
     });

 });

app.listen(3000);