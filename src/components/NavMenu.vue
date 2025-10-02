<script setup>
import useAuth from '../composables/useAuth'
const { isAuthenticated, user, logout } = useAuth()
</script>

<template>
  <nav class="bg-slate-900 h-20 flex items-center justify-center text-white space-x-6 px-4">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Other' }">Other</router-link>

    <template v-if="!isAuthenticated">
      <router-link :to="{ name: 'LoginPage' }">Login</router-link>
    </template>
    <template v-else>
      <span>Welcome {{ user?.email }}</span>
      <button class="rounded-md bg-red-500 hover:bg-red-700 text-red-100 px-4 py-2" @click="logout">Logout</button>
    </template>

    <router-link :to="{ name: 'SettingsPage' }">Settings</router-link>
  </nav>
</template>
