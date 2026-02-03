<template>
  <div class="stats p-6">
    <h2 class="text-2xl font-bold mb-6">Statistics</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <p class="text-sm text-gray-500 dark:text-gray-400">Total Visits</p>
        <p class="text-3xl font-bold">{{ userStore.stats.totalVisits }}</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <p class="text-sm text-gray-500 dark:text-gray-400">Projects Created</p>
        <p class="text-3xl font-bold">{{ userStore.stats.projectsCreated }}</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <p class="text-sm text-gray-500 dark:text-gray-400">Session Score</p>
        <p class="text-3xl font-bold">{{ Math.min(100, userStore.stats.totalVisits * 5) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/userStore'
const userStore = useUserStore()
</script>
