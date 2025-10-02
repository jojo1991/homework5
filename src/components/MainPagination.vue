<script setup>
import { ref } from 'vue'

const pages = ref(10)        // 10 pages
const activePage = ref(2)    // starts on page 2

function prevPage() {
  if (activePage.value > 1) activePage.value--
  console.log('activePage', activePage.value)
}
function nextPage() {
  if (activePage.value < pages.value) activePage.value++
  console.log('activePage', activePage.value)
}
</script>

<template>
  <div class="flex justify-center gap-4 p-8">
    <button
      class="rounded-md bg-slate-100 p-2 shadow font-medium text-slate-700"
      :disabled="activePage === 1"
      @click="prevPage"
    >
      Prev
    </button>

    <button
      v-for="page in pages"
      :key="page"
      class="rounded-md bg-slate-100 p-2 shadow font-medium text-slate-700"
      :class="page === activePage ? 'bg-yellow-700 text-slate-100' : ''"
    >
      {{ page }}
    </button>

    <button
      class="rounded-md bg-slate-100 p-2 shadow font-medium text-slate-700"
      :disabled="activePage === pages"
      @click="nextPage"
    >
      Next
    </button>
  </div>
</template>
