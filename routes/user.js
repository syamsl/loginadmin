const express = require('express')
const router = express.Router();
var dataHelper = require('../helpers/data-helpers')
var userHelper =  require('../helpers/user-helper')


router.get('/', (req, res)=>{
    if(req.session.user){
        res.redirect('/')
    }else{
        if(req.query.existerr){
            res.render('signup',{message:'Email or Mobile number already exist',err:true})
        }else{
            res.render('signup');
        }
    }
    
});


router.get('/login',(req, res)=>{
    if(req.session.user){
        res.redirect('/')
    }else{
        if(req.query.loginerr){
            res.render('login',{loginErr:'Invalid username and password'});
        }else{
            res.render('login');
        }
    }
})


router.post('/signup',(req, res)=>{
    // console.log(req.body);
    // dataHelper.addData(req.body, (result)=>{
    //     res.render('login') 
    //  })
    userHelper.doSignup(req.body).then((response)=>{
        if(response.status){
            res.redirect('/user?existerr=true')
        }else{
            res.redirect('/user/login')
        }
        
    })  
})


router.post('/regis',(req, res)=>{

    userHelper.doLogin(req.body).then((response)=>{
        console.log(response.status);

        if(response.status==false){

            res.redirect('/user/login?loginerr=true')
        }else{
            req.session.user = response.user
            req.session.userLoggedIn = true;
            res.redirect('/user/login')
        }
    })

    // console.log(req.body);
})

router.get('/logout',(req, res)=>{
    req.session.user=null;
    res.redirect('/user/login')
})


module.exports = router;