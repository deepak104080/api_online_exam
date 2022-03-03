const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
var colors = require('colors');

app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send('My First Express Page...');
    console.log(colors.red(req.query));
})

const usersRoute = require('./routes/users');
app.use('/users', usersRoute);
// app.get('/home',(req, res) => {
    
// })

// app.get('/serviceslist',(req, res) => {
    
// })

app.listen(4000);




// localhost:4000 - GET
// localhost:4000/users - GET
// localhost:4000/users - POST
// localhost:4000/users - PUT
// localhost:4000/users - DELETE
