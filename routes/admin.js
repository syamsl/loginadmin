const { response } = require('express');
const express = require('express');
const dataHelpers = require('../helpers/data-helpers');
const router = express.Router();
const username = 'Ace'
const password = 'asdf'

router.get('/', (req, res)=>{
    if(req.session.admin){
        res.redirect('/admin/submit');
    }else{
        if(req.query.auth)
        {return res.render('loginadmin',{message:"Invalid username and password"})}
        res.render('loginadmin')
    }
    
});

router.get('/submit',(req, res)=>{
    if(req.session.admin){
        dataHelpers.getData().then((data)=>{
            res.render('adminpanel',{data})
        })
    }else{
        res.redirect('/admin')
    }
})

router.post('/submit', function(req, res){

    if (username==req.body.name && password==req.body.pass){
        let admin = {
            adminLoggedIn:true
        }
        req.session.admin = admin;
            res.redirect('/admin/submit')
        
    }else{
        res.redirect('/admin/?auth=false')
    }
})

router.get('/adduser', (req, res)=>{
    if(req.session.admin){
        if(req.query.existerr){
            res.render('adduser',{message:'Email or Phone number exist', err:true})
        }else{
            res.render('adduser')
        }
        
    }else{
        res.redirect('/admin')
    }
    
})

router.post('/adduser', (req,res)=>{
    console.log(req.body);
    
    dataHelpers.addUser(req.body).then((response)=>{
        console.log(response);
        if(response.status){
        res.redirect('/admin/addUser?existerr=true')
        }
        res.redirect('/admin/submit')
    })
})

router.get('/logout', (req, res)=>{
    req.session.admin=null
    res.redirect('/admin')
})

router.get('/delete-data/:id',(req, res)=>{
    let dataId = req.params.id
    dataHelpers.deleteData(dataId).then((response)=>{
        res.redirect('/admin/submit')
    })
})

router.get('/edit-data/:id',async(req, res)=>{
    if(req.session.admin){
        let dataId = req.params.id;
        let data = await dataHelpers.getOneData(dataId)
        console.log(data);
        res.render('edituser',{data})
    }else{
        res.redirect('/admin')
    }
    
})

router.post('/edit-data/:id',(req,res)=>{
    let dataId = req.params.id;
    let data = req.body;
    dataHelpers.updateData(dataId, data).then(()=>{
        res.redirect('/admin/submit')
    })
})


module.exports = router;