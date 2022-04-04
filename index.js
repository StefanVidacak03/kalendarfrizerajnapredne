const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var mysql = require("mysql2")
const multer = require('multer');
app.use(express.static('public'));
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // So secure way to do this
    password: 'St3f@n!!',
    database: 'frizeraj'
  });
  
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
;
app.set('views', './views');
app.set('view engine', 'ejs')
app.use('/', express.static(__dirname + 'public'))

app.get('/', (req, res) => {
    res.render("index")
});

app.post('/index', multer().none(), (req,res)=>{

    connection.query("INSERT INTO termin (Dan, Sat, klijent_idklijent, cena) VALUES ('" + req.body.datum + "', '" +req.body.sat+ "', '" + req.body.klijent + "', '" +req.body.cena+ "')",
    function (err, rows, fields) {
  
        if (err) throw err;
  
        res.send("Upisano je u bazu");
    });
  })
app.listen(5000);
