const mongoose=require('mongoose')

const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongodb Atlas Connected Successfully')
    } catch (error) {
       console.log('Mongodb Atlas Connection error',error) 
    }
}

module.exports=dbConnect