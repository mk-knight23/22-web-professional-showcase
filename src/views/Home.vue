<template>
  <div class="home p-6">
    <h1 class="text-3xl font-bold mb-4">Welcome to Professional Showcase</h1>
    <p class="text-lg mb-6">Your professional portfolio and showcase platform.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-2">Projects</h2>
        <p class="text-gray-600 dark:text-gray-400">Showcase your work and accomplishments.</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-2">About</h2>
        <p class="text-gray-600 dark:text-gray-400">
          Learn more about your professional background.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '../stores/userStore'

const userStore = useUserStore()
onMounted(() => {
  userStore.incrementVisits()
})
</script>
