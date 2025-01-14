const express=require('express')

const app=express()


app.get('/',(req,res)=>{
    res.send('Testing the API')
})

app.listen(3000,()=>{
    console.log('server running ')
})