import { useState } from "react";
import toast from "react-hot-toast";
import { registerRequest } from "../../services/api";

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false)

    const register = async(email, username, password) => {
        setIsLoading(true)
        //Consultar al API
        const user = {
            email,
            username,
            password
        }
        const response = await registerRequest(user)
        setIsLoading(false)
        if(response.error){
            return toast.error(
                response?.e?.response?.data ||
                'Error general al intentar registrar el usuario. Intenta de nuevo.'
            )
        }
        console.log(response)
    }

    return {
        register,
        isLoading
    }
}