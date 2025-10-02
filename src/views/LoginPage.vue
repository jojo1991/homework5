<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'

const email = ref('')
const password = ref('')
const route = useRoute()
const router = useRouter()

const { login } = useAuth()

const logUserIn = async () => {
  const ok = await login(email.value, password.value)
  if (ok) {
    if (route.query.redirect) {
      router.push(route.query.redirect)
    } else {
      router.push({ name: 'SettingsPage' })
    }
  } else {
    alert('Invalid credentials. Try again.')
  }
}
</script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-slate-100">
    <form 
      @submit.prevent="logUserIn" 
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96"
    >
      <h1 class="text-2xl font-bold mb-4 text-center">Login</h1>

      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="Enter email"
        class="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700"
      />

      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        id="password"
        v-model="password"
        type="password"
        placeholder="Enter password"
        class="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700"
      />

      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </form>
  </main>
</template>
