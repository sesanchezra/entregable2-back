const express = require('express')
const usersRouter = require('./users/users.router')
const app = express()
const port = 9004

app.use(express.json())

app.use('/api/v1',usersRouter)

app.listen(port, ()=> {
    console.log(`Server started at port ${port}`)
})