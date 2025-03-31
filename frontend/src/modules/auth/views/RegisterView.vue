<template>
  <h1 class="text-2xl font-semibold mb-4">Registro</h1>
  <form @submit.prevent="onRegister">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="name" class="block text-gray-600">Nome</label>
      <input
        v-model="myForm.name"
        ref="nameInputRef"
        type="text"
        id="name"
        name="name"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <!-- Email Input -->
    <div class="mb-4">
      <label for="email" class="block text-gray-600">Email</label>
      <input
        v-model="myForm.email"
        ref="emailInputRef"
        type="text"
        id="email"
        name="email"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Senha</label>
      <input
        v-model="myForm.password"
        ref="passwordInputRef"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Esqueceu a senha?</a>
    </div>
    <!-- Login Button -->
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      Criar Conta
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'login' }" class="hover:underline">Acessa por aqui</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '../stores/auth.store';
import { useToast } from 'vue-toastification';

const authStore = useAuthStore();
const toast = useToast();

const nameInputRef = ref<HTMLInputElement | null>(null);
const emailInputRef = ref<HTMLInputElement | null>(null);
const passwordInputRef = ref<HTMLInputElement | null>(null);

const myForm = reactive({
  name: '',
  email: '',
  password: '',
});

const onRegister = async () => {
  if (myForm.name.length < 2) {
    return emailInputRef.value?.focus();
  }

  if (myForm.email === '') {
    return emailInputRef.value?.focus();
  }

  if (myForm.password.length < 6) {
    return passwordInputRef.value?.focus();
  }

  const { error, message } = await authStore.register(myForm.name, myForm.email, myForm.password);

  if (!error) return;

  toast.error(message);
};
</script>
