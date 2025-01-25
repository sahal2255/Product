const express=require('express')
const cors=require('cors')
const dbConnect = require('./middlewares/dbConnect')
const productRoute=require('./router/productRoute')
require('dotenv').config()
const app=express()




app.use(cors({
    origin:process.env.BASE_URL||'http://localhost:5173',
    credentials:true,
    methods:['GET','POST']
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',productRoute)



app.listen(3005,()=>{
    console.log('server running ')
    dbConnect()
})

