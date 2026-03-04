import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Stats {
  totalVisits: number
  totalTimeSpent: number
  lastVisit: string | null
}

const STORAGE_KEY = 'personal-page-stats'

const defaultStats: Stats = {
  totalVisits: 0,
  totalTimeSpent: 0,
  lastVisit: null,
}

function loadStats(): Stats {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return { ...defaultStats, ...JSON.parse(stored) }
    }
  } catch {
    // Failed to load stats
  }
  return defaultStats
}

export const useStatsStore = defineStore('stats', () => {
  const savedStats = loadStats()
  const totalVisits = ref(savedStats.totalVisits)
  const totalTimeSpent = ref(savedStats.totalTimeSpent)
  const lastVisit = ref<string | null>(savedStats.lastVisit)

  function recordVisit(): void {
    totalVisits.value++
    lastVisit.value = new Date().toISOString()
    saveStats()
  }

  function addTimeSpent(seconds: number): void {
    totalTimeSpent.value += seconds
    saveStats()
  }

  function resetStats(): void {
    totalVisits.value = 0
    totalTimeSpent.value = 0
    lastVisit.value = null
    saveStats()
  }

  function formatTime(): string {
    const seconds = totalTimeSpent.value
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    if (hours > 0) return `${hours}h ${minutes}m`
    return `${minutes}m`
  }

  function saveStats(): void {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          totalVisits: totalVisits.value,
          totalTimeSpent: totalTimeSpent.value,
          lastVisit: lastVisit.value,
        })
      )
    } catch {
      // Failed to save stats
    }
  }

  return {
    totalVisits,
    totalTimeSpent,
    lastVisit,
    recordVisit,
    addTimeSpent,
    resetStats,
    formatTime,
  }
})
