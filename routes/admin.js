const express = require('express');
const dataHelpers = require('../helpers/data-helpers');
const router = express.Router();
const username = 'Ace'
const password = 'asdf'
var admin = 'Admin Panel'

router.get('/', (req, res)=>{
    if(!req.session.adminLoggedIn){
        res.render('loginadmin');
    }else{
        res.render('adminpanel')
    }
    
});



router.post('/submit', function(req, res){

    if (username==req.body.name && password==req.body.pass){
        req.session.adminLoggedIn = true;
        dataHelpers.getData().then((data)=>{
            res.render('adminpanel',{data, admin})
        })
    }
})

router.get('/adduser', (req, res)=>{
    res.render('adduser')
})

router.post('/adduser', (req,res)=>{
    console.log(req.body);
    res.send('ok')
})
router.get('/logout', (req, res)=>{
    req.session.adminLoggedIn=""
    res.redirect('/admin')
})


module.exports = router;