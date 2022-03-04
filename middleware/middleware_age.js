const reqFilter = (req, res, next) => {
    console.log('Middleware served...');
    console.log(req.query.age);
    if(!req.query.age) {
        res.send('Enter the age.')
    }
    if(req.query.age > 18) {
        next();
    }
    else{
        res.send('Kids are not allowed...');
    }
    
}

module.exports = reqFilter;