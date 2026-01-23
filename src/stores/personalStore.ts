import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const usePersonalStore = defineStore('personal', {
  state: () => ({
    theme: useLocalStorage('personal-theme', 'slate'),
    isDarkMode: useLocalStorage('personal-dark-mode', true),
    accentColor: useLocalStorage('personal-accent', '#10b981'),
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      document.documentElement.classList.toggle('dark')
    },
    setAccent(color: string) {
      this.accentColor = color
    }
  }
})
