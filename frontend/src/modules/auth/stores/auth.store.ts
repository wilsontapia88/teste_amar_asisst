import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { AuthStatus, type User } from '../interfaces'
import { loginAction } from '../actions';
import { useLocalStorage } from '@vueuse/core';
import { registerAction } from '../actions/register.action';
import { checkAuthAction } from '../actions/check-auth.action';

export const useAuthStore = defineStore('auth', () => {

    const authStatus = ref<AuthStatus>(AuthStatus.Checking);
    const user = ref<User | undefined>();
    const token = ref(useLocalStorage('token', ''));

    const login = async(email:string, password:string) => {
        try {
            const loginResp = await loginAction(email, password)

            if(loginResp.error){
                logout()
                return false
            }

            user.value = loginResp.user
            token.value = loginResp.token
            authStatus.value = AuthStatus.Authenticated

            return true
        } catch (error) {
            return logout()
        }
    }

    const register = async (name: string, email: string, password: string) => {
      try {
        const registerResp = await registerAction(name, email, password);

        console.log(registerResp)

        if (registerResp.error) {
          logout();
          return { error: true, message: registerResp.message };
        }

        user.value = registerResp.user;
        token.value = registerResp.token;
        authStatus.value = AuthStatus.Authenticated;

        return { error: false, message: '' };
      } catch (error) {
        return { error: true, message: 'Error al registrar el usuario' };
      }
    };

    const logout = () =>{
      localStorage.removeItem('token')
      authStatus.value = AuthStatus.UnAuthenticated
      user.value = undefined
      token.value = ''

      return false
    }

    const checkAuthStatus = async (): Promise<boolean> => {
      try {
        const statusResp = await checkAuthAction();

        if (statusResp.error) {
          logout();
          return false;
        }

        authStatus.value = AuthStatus.Authenticated;
        user.value = statusResp.user;
        return true;
      } catch (error) {
        logout();
        return false;
      }
    };

  return {
    user,
    token,
    authStatus,

    //Getters
    isChecking: computed(() => authStatus.value === AuthStatus.Checking),
    isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),

    //actions
    login,
    logout,
    register,
    checkAuthStatus,
  }
})
