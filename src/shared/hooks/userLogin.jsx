import { useState } from "react";
import toast from "react-hot-toast";
import { loginRequest } from "../../services/api";

export const userLogin = () => {
    const [isLoading, setIsLoading] = useState(false)

    const login = async(email, password) => {
        setIsLoading(true)
        //Consultar el API
        const login = {
            email,
            password
        }
        const response = await loginRequest(login)
        setIsLoading(false)
        if(response.error){
            return toast.error(
                response?.e?.response?.data ||
                'Error al validar sus credenciales. Intenta de nuevo'
            )
        }else{
            return toast.success('Ha iniciado sesión correctamente')
        }
        console.log(response)
    }

    return {
        login,
        isLoading
    }
}