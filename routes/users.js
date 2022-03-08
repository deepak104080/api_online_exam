const express = require('express');
const router = express.Router();
var colors = require('colors');



router.post('/', (req, res) => {
    res.send('Users List - POST Call');
})

router.get('/', (req, res) => {
    res.send('Users List - GET Call');
})

router.put('/', (req, res) => {
    res.send('Users List - PUT Call');
})

router.delete('/', (req, res) => {
    res.send('Users List - DELETE Call');
})

// router.get('/all', (req, res) => {
//     res.send('Users List - GET Call - All Users');
// })

router.get('/allusers/:id', (req, res) => {
    console.log(colors.red(req.params.id));
    res.send('Users List - GET Call - All Users - ');
})

router.get('/allusers', (req, res) => {
    console.log(colors.red(req.query));
    res.send('Users List - GET Call - All Users - ');
})

module.exports = router;

// localhost:4000/users - GET
// localhost:4000/users - POST
// localhost:4000/users - PUT
// localhost:4000/users - DELETE
