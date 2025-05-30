const express=require('express')
const app=express()
const PORT=process.env.PORT || 5001
const path=require('path')

app.use(express.static(path.join(__dirname,'../client/build')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/build','index.html'))
})

app.listen(PORT,()=>console.log(`Server is listening on ${PORT}`))