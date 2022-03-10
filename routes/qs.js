const express = require('express');
const router = express.Router();
// const db = require('./../db');

router.post('/', (req, res) => {
    try{
        const qs_new = {
            question: req.body.question,
            answer: req.body.answer,
        }
        console.log(qs_new);
        // const newQsStatus = db.promise().query('INSERT INTO questions_list [question, answer] values [qs_new.question, qs_new.answer]');
        res.status(201).json(newQsStatus);
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
})

module.exports = router;

// question
// ans1
// ans2
// ans3
// ans4
// correctans



// INSERT, SELECT, UPDATE
// JOIN
// SUBQUERY

// write a sql query to find 2nd highest salary

// SELECT * FROM 
// SELECT MAX FROM salary



// employee
// employee_id - employee_name
// 0001         - Mr abc
// 0002 -          Mr DEF
// 0003 -          Mr XYZ

// Foreign Key


// salary
// employee_id_self     month       salary_amount       pf      tax         hra     net_amount
// 0001            jan         10000
// 0002            jan         20000
// 0003            jan         30000
// 0001            feb         11000
// 0002            feb         21000
// 0003            feb         32000


// JOINS

// SELECT employee.employee_name, salary.salary_amount FROM employee INNER JOIN salary ON employee.employee_id = salary.employee_id_self