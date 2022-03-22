var express = require('express');
// const { getMaxListeners } = require('process');
var app = express();

app.use(express.static('public'));
// app.set('view engine', 'ejs');
// connection.connect();

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

// app.get('/', (req, res) => {

//     connection.query('SELECT * from grad', function (err, rows, fields) {
//         if (err) throw err;
//         res.render('index', { REZULTAT: rows });
//     });
    
// });

app.listen(3000);