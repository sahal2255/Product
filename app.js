const express=require('express')
const cors=require('cors')
const dbConnect = require('./middlewares/dbConnect')
require('dotenv').config()
const app=express()

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('Testing the API')
})

app.get('/login',(req,res)=>{
    res.send('Login Route')
})

app.listen(3005,()=>{
    console.log('server running ')
    dbConnect()
})

