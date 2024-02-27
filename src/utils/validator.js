//Validar difernetes datos.
'Use strict'

import bcrypt, { compare, hash } from 'bcrypt'

//Encripatar contraseña
export const encrypt = async(password) => {
    try {
        return hash(password, 10)
    } catch (error) {
        console.error(err)
        return err
    }
}

//Valida la contraseña
export const checkPassword = async(password, hash) => {
    try {
        return await compare(password, hash)
    } catch (error) {
        console.error(err);
        return err
    }
}

export const checkUpdate = (data, userId) => {
    if (userId) {
        if(
            Object.entries(data).length === 0 ||
            data.password ||
            data.password == '' ||
            data.role ||
            data.role == ''
        ) {
            return true
        }
        return false
    }else{
        if(
            Object.entries(data).length === 0 ||
            data.keeper ||
            data.keeper == ''
        ){
            return false
        }
        return true
    }
}
