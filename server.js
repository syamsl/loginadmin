const express = require('express');
const router = require('./routes');
const path = require('path')
const app =  express();
const db = require('./config/connection')
var session = require('express-session')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
  });


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')))
app.use(session({secret:"Key", resave:true, saveUninitialized:true, cookie:{maxAge:100000000}}))


db.connect((err)=>{
    if(err) console.log('ERROR:'+err);
    else console.log('Database connected to port 27017');
})

app.use('/',router)



app.listen(8080, ()=>console.log('Server runzzz...'))