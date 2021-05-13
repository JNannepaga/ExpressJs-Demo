const express = require('express');
const loginController = require('../controllers/userManagement/loginController');

const router = express.Router();

router.get('/', function(req, res){
    res.render('app.pug');
});

router.get('/Login', function(req, res){
    res.render('login.pug');
});

router.post('/Login', function(req, res){
    const { userName, password } = req.body;
    //res.cookie('name','malips-cookie',{expire: 360000 + Date.now()}).set('cookie set');
    if(loginController(userName, password)){
        res.render('home.pug',{userName : userName});
    }
    else{
        res.render('login.pug',{errorMessage : 'Invalid Credentials'});
    }
});

module.exports  = router;