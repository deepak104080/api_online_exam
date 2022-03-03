const express = require('express');
const router = express.Router();
var colors = require('colors');

router.get('/', (req, res) => {
    res.send('Users List - GET Call');
})

router.post('/', (req, res) => {
    res.send('Users List - POST Call');
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

module.exports = router;