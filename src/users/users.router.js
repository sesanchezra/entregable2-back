const router = require('express').Router()

const usersServices = require('./users.services')

router.get('/users',usersServices.getAllUsers)
router.post('/users',usersServices.postUser)
router.put('/users',usersServices.putUser)
router.get('/users/:id',usersServices.getUserById)
router.delete('/users/:id',usersServices.deleteUserService)

module.exports = router