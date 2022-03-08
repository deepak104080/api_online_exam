const express = require('express');
const router = express.Router();
var colors = require('colors');
const User = require('../models/User');

router.post('/', async (req, res) => {
    try{
        console.log('Inside Route');
        const user = new User({
            userid: req.body.userid,
            username: req.body.username,
            name: req.body.name,
            email: req.body.email
        })
        const newUserStatus = await user.save();
        console.log(newUserStatus);
        res.status(201).json(newUserStatus);
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
    // res.send('Users List - POST Call');
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
