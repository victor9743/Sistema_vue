var SERVexpress = require('express');
var SERVparser = require('body-parser');

var app = SERVexpress();

var SERVrotas = require('./routes/rotas');
var SERVcors = require('cors');



app.use(SERVcors());

app.use(SERVparser.urlencoded({ extended : false}))
app.use(SERVparser.json());


app.use("/", SERVrotas);


app.listen(3000, ()=>{

    console.log("Servidor Rodando na porta Localhost:3000");
})

