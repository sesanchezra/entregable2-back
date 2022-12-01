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
const findAllUsers = () => {
    return usersDB
}

//Obtener usuario por id
const findUserById = (id) => {
    const filterUser = usersDB.find(user => user.id == id)
    return filterUser
}

//Crear un usuario
const createUser = (data) => {
    const newUser = {
        id: id++,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    }
    usersDB.push(newUser)
    return newUser
}

//Actualizar un usuario

const updateUser = (data) => {
    const filterUser = usersDB.find(user => user.id === data.id)

    if (filterUser) {
        const updateUser = {
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            birthday: data.birthday
        }
        usersDB.find((user, index) => {
            if (user.id === id) {
                usersDB.splice(index, 1, updateUser)
            }
        })

        return updateUser
    }
    else {
        return filterUser
    }
}


//Borrar un usuarios

const deleteUser = (id) =>{
    const filterUser = usersDB.find(user => user.id === id)

    if(filterUser){
        usersDB.find((user,index) => {
            if(user.id=== id){
                usersDB.splice(index,1)
            }
        })
        return usersDB
    }
    else{
        return filterUser
    }
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