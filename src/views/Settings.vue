<template>
  <div class="settings p-6">
    <h2 class="text-2xl font-bold mb-6">Settings</h2>
    <div class="space-y-6">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">Appearance</h3>
        <div class="flex items-center justify-between mb-4">
          <span>Theme</span>
          <button
            @click="userStore.updateSettings({ theme: userStore.settings.theme === 'light' ? 'dark' : 'light' })"
            class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {{ userStore.settings.theme === 'light' ? '🌙' : '☀️' }}
          </button>
        </div>
        <div class="flex items-center justify-between">
          <span>Notifications</span>
          <button
            @click="userStore.updateSettings({ notifications: !userStore.settings.notifications })"
            class="px-4 py-2 rounded-lg"
            :class="userStore.settings.notifications ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'"
          >
            {{ userStore.settings.notifications ? 'On' : 'Off' }}
          </button>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">Profile</h3>
        <input
          type="text"
          placeholder="Your name"
          :value="userStore.profile.name"
          @input="userStore.updateProfile({ name: ($event.target as HTMLInputElement).value })"
          class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/userStore'
const userStore = useUserStore()
</script>
