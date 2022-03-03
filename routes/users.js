const express = require('express');
const router = express.Router();

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

router.get('/all/:id', (req, res) => {
    console.log(req.params.id);
    res.send('Users List - GET Call - All Users - ', req.params.id);
})

module.exports = router;