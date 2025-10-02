<script setup>
import { ref } from 'vue'
import { faker } from '@faker-js/faker'

const firstName = faker.person.firstName()
const lastName  = faker.person.lastName()
const fullName  = `${firstName} ${lastName}`
const job_title = faker.person.jobTitle()
const bio       = faker.lorem.lines(2)
const username  = faker.internet.username({ firstName, lastName }).toLowerCase()


const imgSrc = ref(`https://loremflickr.com/960/480/cats?lock=${Math.floor(Math.random()*100000)}`)
const fallbacks = [
  `https://placekitten.com/960/480`,
  `https://picsum.photos/seed/${encodeURIComponent(username)}/960/480`,
  `https://placehold.co/960x480?text=Cat`
]
let fbIdx = 0

function onImgErr() {
  if (fbIdx < fallbacks.length) {
    imgSrc.value = fallbacks[fbIdx++]
  }
}
</script>

<template>
  <router-link :to="{ name: 'CardDetails', params: { id: username } }" class="block">
    <div class="border border-gray-400 rounded-xl shadow hover:shadow-lg transition p-4">
      <img
        class="object-fill w-[960px] h-[480px] rounded-t-xl"
        :src="imgSrc"
        @error="onImgErr"
        alt="profile"
      />
      <p class="mb-2 text-2xl font-bold mt-3">{{ fullName }}</p>
      <p class="mb-3 font-normal text-gray-700">{{ job_title }}</p>
      <p class="mb-3 font-normal text-gray-700">{{ bio }}</p>
    </div>
  </router-link>
</template>
