const express = require('express')
const router = express.Router();
var dataHelper = require('../helpers/data-helpers')
var userHelper =  require('../helpers/user-helper')


router.get('/', (req, res)=>{
    if(!req.session.userLoggedIn){
        res.render('signup');
    }else{
        res.redirect('/')
    }
    
});


router.get('/login',(req, res)=>{
    if(!req.session.userLoggedIn){
        res.render('login');
    }else{
        res.redirect('/')
    }
})


router.post('/signup',(req, res)=>{
    // console.log(req.body);
    // dataHelper.addData(req.body, (result)=>{
    //     res.render('login') 
    //  })
    userHelper.doSignup(req.body).then((response)=>{
        console.log(response);
        res.render('login') 
    })  
})


router.post('/regis',(req, res)=>{

    userHelper.doLogin(req.body).then((response)=>{
        console.log(response.status);

        if(response.status){
            req.session.userLoggedIn = true;
            req.session.user = response.user
            res.redirect('/')
        }else{
            res.redirect('/user/login')
        }
    })

    // console.log(req.body);
})

router.get('/logout',(req, res)=>{
    req.session.destroy();
    res.redirect('/user/login')
})


module.exports = router;