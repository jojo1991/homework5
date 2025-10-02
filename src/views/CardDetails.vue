<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <h1 style="padding:16px">Card Details</h1>
  <p style="padding:16px">Username (ID): {{ route.params.id }}</p>
</template>
