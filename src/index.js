const express=require('express')
const router=require('./routes/translate-route')
require('dotenv').config()
const app=express()
app.use(express.json())

app.use('/translate',router)

app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${process.env.PORT}`)
});``


