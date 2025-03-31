import { amAssistApi } from "@/api/amAssistApi"
import type { AuthResponse, User } from '../interfaces';
import { isAxiosError } from 'axios';

interface CheckError {
  error: true;
}

interface CheckSuccess {
  error: false;
  user: User;
}

export const checkAuthAction = async (): Promise<CheckError | CheckSuccess> => {
  try {
    const localToken = localStorage.getItem('token');
    if (localToken && localToken.length < 10) {
      return { error: true };
    }

    const { data } = await amAssistApi.get<AuthResponse>('/api/check-status',{
      headers: {
        Authorization: `Bearer ${localToken}`,
      }
    });

    return {
      error: false,
      user: data.user,
    };
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      return {
        error: true,
      };
    }

    throw new Error('No se pudo verificar la sesión');
  }
};
