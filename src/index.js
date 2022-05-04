
const express  = require('express')
const path     = require('path')
const hbs      = require('hbs')
const App      = express()
const port     = process.env.port|| 3300

 
App.use(express.static(path.join(__dirname,'../public')))
App.set('view engine','hbs')

hbs.registerPartials(path.join(__dirname,'../template/partials'))
App.set('views',path.join(__dirname,'../template/views'))
App.get('/',(req,res)=>{
    res.render('index')
})
App.get('/weather',(req,res)=>{
    res.render('weather')
})
App.get('*',(req,res)=>{
    res.render('404')
})
App.listen(port,()=>{
console.log(`port Numbe is ${port}`);
})