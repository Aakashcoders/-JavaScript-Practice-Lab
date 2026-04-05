const express = require('express')
const app = express()
const port = 3000
const connectedMongoose = require('./connection/connected')
const Allrouter = require('./router/user')
// const staticrouter = require('./router/Static')
const cookieParser = require('cookie-parser') //first all of install cookie-parser : npm i cookie-parser

// const ejs = require('ejs') not neet this 
const path = require('path')

connectedMongoose("mongodb://localhost:27017/formUser").then(()=>{ console.log('Conneted index file to mongodb')}).catch((error)=>{ console.log(error, "Not connected")})// url or database name

app.set('view engine', 'ejs') //Node.js (specifically Express) ko batane ke liye ki hum EJS template engine use kar rahe hain, hum app.set ka use karte hain.
app.set('views', path.resolve('./views')) //// path.resolve current directory se 'views' folder ka full absolute path banata hai


app.use(express.urlencoded()) //middlware
app.use('/user', Allrouter) //route
// app.use('/login', staticrouter) //route
app.use(cookieParser())//Second cookies ko use kana padta hai

app.get('/login', (req,res)=>{
    return res.render('login')
})

app.listen(port, ()=>{
    console.log(`Server runing for this port : ${port}`)
})