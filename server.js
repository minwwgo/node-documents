const express = require('express')
const documents= require('./documents')


const app = express()


app.get('/search',(req,res)=>{
  // console.log('hello search')
  const searchId=Number(req.query.id)
  const document = documents.filter(doc => doc.id === searchId)
  res.send(document)
})

app.get('/',(req,res)=>{
  // console.log('hello')
  res.send(documents)
})

let port = process.env.port
if(port == ""|| port == null){
  port = 3004
}

app.listen(port , () => console.log(`Listening on port ${port}`));