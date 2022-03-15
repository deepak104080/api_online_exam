const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = 4000;
var colors = require('colors');
const { default: mongoose } = require('mongoose');
const cors = require('cors');

const reqFilter = require('./middleware/middleware_age');
// app.use(reqFilter);

const reqFilter2 = (req, res, next) => {
    console.log('Inside back End...', req.body);
    next();
}

app.use(reqFilter2);
app.use(cors());

// localhost:4000 - GET
app.get('/',(req, res) => {
    res.send('My First Express Page...');
    console.log(colors.red(req.query));
})

//For accessing direct html files
const path = require('path');
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath));

//For Templating engine
app.set('view engine', 'ejs');


//Route through another page
const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

const qsRoute = require('./routes/qs');
app.use('/questions', qsRoute);

//Other static routes
app.get('/home', reqFilter, (req, res) => {
    res.send('My Home Pagge...');
})

//Route returning html
app.get('/about', reqFilter, (req, res) => {
    res.send('<div><h1>Newton School</h1><p>I wiork at NS</p></div>');
})

//Route returning json
app.get('/services',(req, res) => {
    res.send({
        service1: 'IT Solutions',
        service2: 'SEO',
        service3: 'Payment Gateway'
    });
})

//Route returning html
app.get('/courses',(req, res) => {
    res.send('<h1>Course Page.</h1><a href="http://localhost:4000/contact">Go to Contact Page.</a>');
})

//Route returning html
app.get('/contact',(req, res) => {
    res.send('<h1>Contact Page.</h1><a href="http://localhost:4000/courses">Go to Courses Page.</a>');
})


//Route returning html file
app.get('/team',(req, res) => {
    res.sendFile(`${publicPath}/team.html`);
})

//Route returning html file
app.get('/terms',(req, res) => {
    res.sendFile(`${publicPath}/terms.html`);
})


// Route returning dynamic html through ejs template
app.get('/profile', (req, res) => {
    const user = {
        name: 'Deepak Kumar',
        city: 'GGN',
        skills: ['JS', 'React', 'NodeJS'],
        adult: true
    }
    res.render('profile', {user});
})

// Route returning dynamic html through ejs template - not found page
app.get('*',(req, res) => {
    res.sendFile(`${publicPath}/notfound.html`);
})


mongoose.connect('mongodb+srv://testuser001:z9xsFuktzYAs4fMk@cluster0.2eq41.mongodb.net/online_exam?retryWrites=true&w=majority', {useNewUrlParser: true}, {userUnifiedTology: true}, ()=>{
    console.log('Mongoose DB connected...')
})


//Start Express Server
app.listen(4000);
