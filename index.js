var express = require('express');
// const { getMaxListeners } = require('process');
var app = express();

app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
});

// app.get('/', (req, res) => {

//     connection.query('SELECT * from grad', function (err, rows, fields) {
//         if (err) throw err;
//         res.render('index', { REZULTAT: rows });
//     });
    
// });

app.listen(3000);