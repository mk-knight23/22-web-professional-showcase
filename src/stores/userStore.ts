import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const profile = ref({ name: 'Guest', email: '' })
  const settings = ref({ theme: 'light' as 'light' | 'dark', notifications: true })
  const stats = ref({ totalVisits: 0, projectsCreated: 0 })

  function updateProfile(updates: Partial<typeof profile.value>) {
    profile.value = { ...profile.value, ...updates }
  }

  function updateSettings(updates: Partial<typeof settings.value>) {
    settings.value = { ...settings.value, ...updates }
  }

  function incrementVisits() {
    stats.value.totalVisits++
  }

  function incrementProjects() {
    stats.value.projectsCreated++
  }

  return {
    profile,
    settings,
    stats,
    updateProfile,
    updateSettings,
    incrementVisits,
    incrementProjects
  }
})
