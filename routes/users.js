const express = require('express');

const router = express.Router();
const colors = require('colors');
const User = require('../models/User');
const { create } = require('../models/User');
// const db = require('../db');

router.post('/', async (req, res) => {
  try {
    // console.log('Inside Route', req.body);
    const user = new User({
      userid: req.body.userid,
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
    });
    const sqluser = {
      userid: req.body.userid,
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
    };
    // mongobd
    // const newUserStatus = await user.save();
    // mysql
    const { userid } = req.body;
    const { username } = req.body;
    const { name } = req.body;
    const { email } = req.body;
    const newUserStatus = await db.promise().query('INSERT INTO users SET ?', sqluser);
    // let newUserStatus = await db.promise().query(`INSERT INTO users (userid, username, name, email) VALUES (userid, username, name, email)`);
    // let newUserStatus = await db.promise().query(`INSERT INTO users (userid, username, name, email) VALUES ('userid', 'username', 'name', 'email')`);
    // console.log(newUserStatus);
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Origin', '*');
    res.status(201).json(newUserStatus);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  // res.send('Users List - POST Call');
});

router.get('/', async (req, res) => {
  try {
    // if(userlist is in memcache/radis)
    // return frm memchache
    // else
    const userslist = await User.find();
    // save userlist to memcache for 10 min
    res.status(201).json(userslist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  // res.send('Users List - GET Call');
});

router.get('/:id', async (req, res) => {
  try {
    const temp_id = req.params.id;

    const single_user = await User.find({ userid: temp_id });
    res.status(201).json(single_user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  // res.send('Users List - GET Call');
});

router.put('/:email', async (req, res) => {
  try {
    const tempEmail = req.params.email;

    const tempuser = {
      userid: req.body.userid,
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
    };

    const newUserSaved = await User.findOneAndUpdate({ email: tempEmail }, tempuser, { new: true });
    res.status(201).json(newUserSaved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  // res.send('Users List - PUT Call');
});

router.delete('/', async (req, res) => {
  const tempUser = req.query.user_id;
  try {
    const deletedStatus = await User.deleteOne({ userid: tempUser });
    res.status(201).json(deletedStatus);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  // res.send('Users List - DELETE Call');
});

// router.get('/all', (req, res) => {
//     res.send('Users List - GET Call - All Users');
// })

router.get('/allusers/:id', (req, res) => {
  console.log(colors.red(req.params.id));
  res.send('Users List - GET Call - All Users - ');
});

router.get('/allusers', (req, res) => {
  console.log(colors.red(req.query));
  res.send('Users List - GET Call - All Users - ');
});

module.exports = router;

// localhost:4000/users - GET
// localhost:4000/users - POST
// localhost:4000/users - PUT
// localhost:4000/users - DELETE
