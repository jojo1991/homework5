<script setup>
import useAuth from '../composables/useAuth'
const { user } = useAuth()
</script>

<template>
  <main class="p-6">
    <h1 class="text-2xl font-bold mb-2">Settings</h1>
    <p class="mb-4">Welcome {{ user?.email }}</p>

    <div class="border rounded p-4 bg-white shadow">
      <p>Settings content will go here later (form to add employees once there’s a backend).</p>
    </div>
  </main>
</template>
