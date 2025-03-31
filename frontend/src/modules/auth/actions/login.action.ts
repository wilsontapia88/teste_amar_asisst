import { amAssistApi } from "@/api/amAssistApi"
import { AuthResponse, User } from "../interfaces"
import { isAxiosError } from "axios"

interface LoginError{
    error:true,
    message: string
}

interface LoginSuccess{
    error:false,
    user:User,
    token:string
}

export const loginAction = async (email:string, password:string):Promise<LoginError|LoginSuccess> =>{
    try {
        const {data} = await amAssistApi.post<AuthResponse>('/api/login', {
            email,
            password
        })

        return {
            error: false,
            user: data.user,
            token: data.token,
        }
    } catch (error) {
        if(isAxiosError(error) && error.response?.status === 401){
            return {
                error: true,
                message: "Usuario ou senha incorreto"
            }
        }

        throw new Error ('Não foi feita a requisicao')
    }
}
