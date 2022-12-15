const Users = require('../models/users.model')

const usersDB = [
    {
        id: 1,
        first_name: 'Sebastian',
        last_name: 'Sanchez',
        email: 'se@gmail.com',
        password: '1234567',
        birthday: '1999/04/15'
    },
    {
        id: 2,
        first_name: 'Natalia',
        last_name: 'Triana',
        email: 'na@gmail.com',
        password: '1234567890',
        birthday: '2000/05/22'
    },
]
let id = 3

/* Estructura user
    {
    id: 1,
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    password: 'string',
    birthday: 'YYYY/MM/DD'
    }
*/

//Obtener todos los usuarios
const findAllUsers = async() => {
    const data = await Users.findAll()
    return data
}

//Obtener usuario por id
const findUserById = async(id) => {

    // const filterUser = await Users.findByPk(id)    --- Por primary key

    const filterUser = await Users.findOne({
        where: {
            id: id
        }
    })
    return filterUser
}

//Crear un usuario
const createUser = async (data) => {
    const newUser = await Users.create({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    })
    return newUser
}

//Actualizar un usuario

const updateUser = async (id,obj) => {
    const data = await Users.update(obj,{
        where:{
            id: id
        }
    })

    return data[0]  //Por que data puede ser [1], y puede ser [0]; el primer caso si se modifica algo, el segundo si no se modifica nada
}


//Borrar un usuarios

const deleteUser = async(id) =>{

    const data = await Users.destroy({
        where:{
            id:id
        }
    })

    return data  //Retorna 1 en caso de que se elimine, y 0 en caso de que el id no exista

    
}

module.exports={
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}

// console.log('Sin modificar',usersDB)

// console.log(updateUser({
//     first_name: 'Sebastian',
//     last_name: 'Sanchez',
//     email: 'sebastian@gmail.com',
//     password: '1234567890',
//     birthday: '1999/04/15'
// },1))

// console.log('Modificada',usersDB)

// console.log('Sin modificar',usersDB)

// deleteUser(2)

// console.log('Modificada',usersDB)