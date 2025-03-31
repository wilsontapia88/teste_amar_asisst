import { amAssistApi } from "@/api/amAssistApi"
import type { AuthResponse, User } from '../interfaces';

interface RegisterError {
  error: true;
  message: string;
}

interface RegisterSuccess {
  error: false;
  user: User;
  token: string;
}

export const registerAction = async (
  name: string,
  email: string,
  password: string,
): Promise<RegisterError | RegisterSuccess> => {
  try {
    const { data } = await amAssistApi.post<AuthResponse>('/api/register', {
      name,
      email,
      password,
    });

    console.log(data);

    return {
      error: false,
      user: data.user,
      token: data.token,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
      message: 'No se pudo crear el usuario',
    };
  }
};
