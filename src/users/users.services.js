const usersControllers = require('./users.controllers')


const getAllUsers = (req, res) => {
    const data = usersControllers.findAllUsers()
    res.status(200).json(data)
}

const getUserById = (req, res) => {
    const id = req.params.id
    const data = usersControllers.findUserById(id)
    if (data) {
        res.status(200).json(data)
    }
    else {
        res.status(404).json({ message: 'Invalid ID' })
    }
}

const postUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body

    if (first_name && last_name && email && password && birthday) {
        const data = usersControllers.createUser({ first_name, last_name, email, password, birthday })
        res.status(200).json(data)
    }
    else {
        res.status(400).json({
            message: 'Invalid Data',
            fields: {
                first_name: 'String',
                last_name: 'String',
                email: 'String',
                password: 'String',
                birthday: 'String'
            }
        })
    }
}

const putUser = (req, res) => {
    const {id, first_name, last_name, email, password, birthday } = req.body
    

    if (first_name && last_name && email && password && birthday && id) {
        const data = usersControllers.updateUser({id, first_name, last_name, email, password, birthday })
        res.status(200).json(data)
    }
    else {
        res.status(400).json({
            message: 'Invalid Data',
            fields: {
                id: 'Number',
                first_name: 'String',
                last_name: 'String',
                email: 'String',
                password: 'String',
                birthday: 'String'
            }
        })
    }
}

const deleteUserService = (req, res) => {
    id = req.params.id
    const data = usersControllers.deleteUser(id)
    if (data) {
        res.status(200).json(data)
    }
    else {
        res.status(404).json({ message: 'Invalid ID' })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    putUser,
    deleteUserService
}


// console.log(putUser(
    
//         req= {
//             body:{
//                 "first_name": 'Sebastian',
//                 "last_name": 'Sanchez',
//                 "email": 'sebastian@gmail.com',
//                 "password": '123456789',
//                 "birthday": '1999'
//             },
//             params: {
//                 "id": 1
//             }
//         }
    

    
// ))