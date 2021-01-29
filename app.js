const express=require('express');
const http= require('http');
const app=express();
const path=require('path')
const port=80;
// EXPRESS SPECIFIC STUFF/CONFIGURATION
app.use('/static',express.static('static'))// For serving static files
app.use(express.urlencoded())
// PUG SPECIFIC STUFF/CONFIGURATION
app.set('view engine','pug')// Set the template engine as pug
app.set("views",path.join(__dirname,'views')) // SET THE VIEWS DIRECTORY
app.get('/',(req,res)=>{ 
const params={'title':"Welcome in Fitness Website"}
res.status(200).render('home.pug',params)
})
app.post('/',(req,res)=>{ 
    console.log(req.body)
    const params={'message':"Your data submitted successfully."}
    res.status(200).render('contact.pug',params)
    })
app.get('/',(req,res)=>{ 
    const params={'title':"Welcome in Fitness Website"}
    res.status(200).render('fitness.js',params)
    })
app.get('/about.pug',(req,res)=>{ 
const params={'title':"Welcome in Fitness Website"}
res.status(200).render('about.pug',params)
})
app.get('/bmri.pug',(req,res)=>{ 
const params={'title':"Welcome in Fitness Website"}
res.status(200).render('bmri.pug',params)
})
app.get('/exercise.pug',(req,res)=>{ 
const params={'title':"Welcome in Fitness Website"}
res.status(200).render('exercise.pug',params)
})
app.get('/diet.pug',(req,res)=>{ 
 const params={'title':"Welcome in Fitness Website"}
 res.status(200).render('diet.pug',params)
 })
 app.get('/about.pug',(req,res)=>{ 
 const params={'title':"Welcome in Fitness Website"}
 res.status(200).render('about.pug',params)
 })
 app.get('/contact.pug',(req,res)=>{ 
 const params={'title':"Welcome in Fitness Website"}
 res.status(200).render('contact.pug',params)
 })
app.get('/w',(req,res)=>{ 
    res.status(200).render('web.css')
    })
// STARTS THE SERVER
app.listen(port,()=>{
    console.log(`server is runnning on ${port}`)
})