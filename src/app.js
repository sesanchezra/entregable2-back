const express = require('express')
const usersRouter = require('./users/users.router')
const db = require('./utils/database')
const app = express()
const port = 9004

app.use(express.json())

db.authenticate()
    .then(()=> console.log('Database auntenticada correctamente'))
    .catch((error)=> console.log(error))

db.sync()
    .then(()=> console.log('Database sincronizada correctamente'))
    .catch((error)=> console.log(error))

app.use('/api/v1',usersRouter)

app.listen(port, ()=> {
    console.log(`Server started at port ${port}`)
})