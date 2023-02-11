const express = require('express')
const db= require('./utils/database')
const routerPost= require('./posts/posts.router')

const app = express()
app.use(express.json())

db.authenticate()
    .then(()=>{ console.log('the credentials has been succesfully')})
    .catch((err)=>{console.log(err)})
db.sync()
    .then(()=>{console.log(' the base of data has been updated')})
    .catch((err)=>{console.log(err)})

app.get('/', (req, res)=>{
    res.status(200).json({message:'Server Ok!'})
})

app.use('/api/v1', routerPost)

app.listen(9000, ()=>{console.log('Server started at port 9000')})

