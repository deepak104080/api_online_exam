const express = require('express');
const router = express.Router();
var colors = require('colors');
const User = require('../models/User');
const { create } = require('../models/User');

router.post('/', async (req, res) => {
    try{
        //console.log('Inside Route', req.body);
        const user = new User({
            userid: req.body.userid,
            username: req.body.username,
            name: req.body.name,
            email: req.body.email
        })
        const newUserStatus = await user.save();
        //console.log(newUserStatus);
        res.status(201).json(newUserStatus);
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
    // res.send('Users List - POST Call');
})

router.get('/', async (req, res) => {
    try{
        const userslist = await User.find();
        res.status(201).json(userslist);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
    // res.send('Users List - GET Call');
})


router.get('/:id', async (req, res) => {
    try{
        let temp_id = req.params.id;

        const single_user = await User.find({userid: temp_id});
        res.status(201).json(single_user);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
    // res.send('Users List - GET Call');
})

router.put('/:email', async (req, res) => {
    try{
        let tempEmail = req.params.email;

        const tempuser = {
            userid: req.body.userid,
            username: req.body.username,
            name: req.body.name,
            email: req.body.email
        }

        const newUserSaved = await User.findOneAndUpdate({email: tempEmail}, tempuser, {new: true} );
        res.status(201).json(newUserSaved);

    }
    catch(err) {
        res.status(400).json({message: err.message});
    }
    // res.send('Users List - PUT Call');
})

router.delete('/', async (req, res) => {
    let tempUser = req.query.user_id;
    try{
        const deletedStatus = await User.deleteOne({userid: tempUser});
        res.status(201).json(deletedStatus);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
    //res.send('Users List - DELETE Call');
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
