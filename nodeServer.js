const express = require('express')
var cors = require('cors')
const app =  express()
app.use(cors())
const port = 2781
app.get("/api",(req,res)=>{
  // res.send(200, 'hi')
  // res.json({ a: 2 })
  res.status(200).send({ a: 5555 })
})
app.get("/",(req,res)=>{
  // res.send(200, 'hi')
  // res.json({ a: 2 })
  res.status(200).send({ a: 2 })
})
app.listen(port,()=>{
  console.log('listening at ' , port)
})
