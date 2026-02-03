<script setup lang="ts">
import { onMounted, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import { usePersonalStore } from './stores/personalStore'
import { useSettingsStore } from './stores/settings'
import { useStatsStore } from './stores/stats'
import { useAudio } from './composables/useAudio'
import { useKeyboardControls } from './composables/useKeyboardControls'
import SettingsPanel from './components/ui/SettingsPanel.vue'
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowUpRight,
  Moon,
  Sun,
  ChevronRight,
  Settings,
  Home,
  BarChart3
} from 'lucide-vue-next'
import { Motion } from '@motionone/vue'

const store = usePersonalStore()
const settingsStore = useSettingsStore()
const statsStore = useStatsStore()
const audio = useAudio()
const { lastAction } = useKeyboardControls()

onMounted(() => {
  statsStore.recordVisit()
})

watchEffect(() => {
  if (lastAction.value === 'help') {
    settingsStore.toggleHelp()
  }
})

const acccents = ['#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#6366f1']

const experience = [
  { year: '2024', role: 'Senior Software Engineer', company: 'Tech Innovations Inc.' },
  { year: '2022', role: 'Full Stack Developer', company: 'Digital Solutions Ltd.' },
  { year: '2020', role: 'Frontend Developer', company: 'StartUp Ventures' }
]

function toggleTheme() {
  audio.playClick()
  const nextTheme = settingsStore.theme === 'dark' ? 'light' : settingsStore.theme === 'light' ? 'system' : 'dark'
  settingsStore.setTheme(nextTheme)
}

function openSettings() {
  audio.playClick()
  settingsStore.toggleHelp()
}
</script>

<template>
  <div class="min-h-screen selection:bg-brand-accent selection:text-white" :class="{ 'dark': settingsStore.isDarkMode, 'light': !settingsStore.isDarkMode }">
    <!-- Navigation -->
    <nav class="fixed top-4 left-4 z-50 flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
      <RouterLink to="/" class="p-2 hover:bg-white/10 rounded-xl transition-all" title="Home">
        <Home class="text-slate-300" :size="18" />
      </RouterLink>
      <RouterLink to="/stats" class="p-2 hover:bg-white/10 rounded-xl transition-all" title="Statistics">
        <BarChart3 class="text-slate-300" :size="18" />
      </RouterLink>
      <RouterLink to="/settings" class="p-2 hover:bg-white/10 rounded-xl transition-all" title="Settings">
        <Settings class="text-slate-300" :size="18" />
      </RouterLink>
    </nav>

    <!-- Theme Toggle Floating -->
    <div class="fixed top-8 right-8 z-50 flex items-center space-x-4">
       <div class="flex p-1.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl">
          <button 
            v-for="color in acccents" 
            :key="color"
            @click="store.setAccent(color)"
            class="w-6 h-6 rounded-full transition-transform hover:scale-125"
            :style="{ backgroundColor: color, border: store.accentColor === color ? '2px solid white' : 'none' }"
          ></button>
       </div>
       <button @click="openSettings" class="p-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/20 transition-all">
          <Settings class="text-slate-300" :size="18" />
       </button>
       <button @click="toggleTheme" class="p-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/20 transition-all">
          <Sun v-if="settingsStore.isDarkMode" :size="18" class="text-amber-400" />
          <Moon v-else :size="18" class="text-blue-600" />
       </button>
    </div>

    <main class="max-w-4xl mx-auto px-8 pt-32 pb-40 space-y-32">
      
      <!-- Hero -->
      <header class="space-y-10">
        <Motion 
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8 }"
          class="inline-flex items-center space-x-3 px-4 py-1 rounded-full bg-white/5 border border-white/10"
        >
          <span class="w-2 h-2 rounded-full animate-pulse" :style="{ backgroundColor: store.accentColor }"></span>
          <span class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Available for Consult</span>
        </Motion>

        <div class="space-y-6">
          <Motion 
            :initial="{ opacity: 0, x: -20 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, delay: 0.2 }"
            tag="h1"
            class="text-7xl md:text-9xl font-display font-black tracking-tighter leading-[0.8] gradient-text"
          >
            M. KAZI
          </Motion>
          <Motion 
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 1, delay: 0.5 }"
            class="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium italic max-w-xl"
          >
            Building high-fidelity digital experiences at the intersection of <span class="text-slate-900 dark:text-white not-italic font-bold">Engineering</span> and <span class="text-slate-900 dark:text-white not-italic font-bold">Design</span>.
          </Motion>
        </div>

        <Motion 
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.8 }"
          class="flex flex-wrap gap-10"
        >
          <div class="flex items-center space-x-6 text-slate-400">
             <Github class="hover:text-white cursor-pointer transition-colors" :size="22" />
             <Twitter class="hover:text-white cursor-pointer transition-colors" :size="22" />
             <Linkedin class="hover:text-white cursor-pointer transition-colors" :size="22" />
             <Mail class="hover:text-white cursor-pointer transition-colors" :size="22" />
          </div>
          <button class="font-black uppercase tracking-widest text-xs flex items-center group" :style="{ color: store.accentColor }">
            Download Dossier <ArrowUpRight class="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" :size="16" />
          </button>
        </Motion>
      </header>

      <!-- Services -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-20">
         <div class="space-y-8">
            <h3 class="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Core Focus</h3>
            <div class="space-y-12">
               <div class="group space-y-4">
                  <div class="w-12 h-0.5 bg-slate-200 dark:bg-slate-800 transition-all group-hover:w-20" :style="{ backgroundColor: store.accentColor }"></div>
                  <h4 class="text-2xl font-display font-bold">Systems Architecture</h4>
                  <p class="text-sm text-slate-500 leading-relaxed">Designing scalable, resilient frontend infrastructures using modern reactive patterns and component-driven development.</p>
               </div>
               <div class="group space-y-4">
                  <div class="w-12 h-0.5 bg-slate-200 dark:bg-slate-800 transition-all group-hover:w-20" :style="{ backgroundColor: store.accentColor }"></div>
                  <h4 class="text-2xl font-display font-bold">Product Strategy</h4>
                  <p class="text-sm text-slate-500 leading-relaxed">Aligning technical capabilities with user-centric design to deliver high-impact products that solve real-world problems.</p>
               </div>
            </div>
         </div>

         <div class="space-y-8">
            <h3 class="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Selected Work</h3>
            <div class="space-y-4">
               <div v-for="i in 3" :key="i" class="glass p-6 rounded-3xl flex items-center justify-between group hover:bg-white/5 transition-all cursor-pointer">
                  <div class="flex items-center space-x-4">
                     <div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg">0{{ i }}</div>
                     <span class="font-bold">Project Alpha-{{ i }}</span>
                  </div>
                  <ChevronRight class="text-slate-600 group-hover:text-white transition-colors" :size="18" />
               </div>
            </div>
         </div>
      </section>

      <!-- Timeline -->
      <section class="space-y-10">
         <h3 class="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Chronicle</h3>
         <div class="space-y-0 border-l border-slate-100 dark:border-slate-800 ml-4">
            <div v-for="exp in experience" :key="exp.year" class="relative pl-10 pb-12 group">
               <div class="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:scale-150 transition-transform" :style="{ backgroundColor: store.accentColor }"></div>
               <div class="space-y-1">
                  <span class="text-[10px] font-black uppercase tracking-widest text-slate-400">{{ exp.year }}</span>
                  <h4 class="text-xl font-bold">{{ exp.role }}</h4>
                  <p class="text-slate-500 font-medium italic">{{ exp.company }}</p>
               </div>
            </div>
         </div>
      </section>

    </main>

    <footer class="py-20 px-8 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center space-y-8">
       <div class="text-center space-y-2">
          <p class="text-xs font-black uppercase tracking-[0.4em] text-slate-400">End of Line</p>
        <p class="text-[10px] text-slate-500">© 2026 Crafted with Vue 3 & Precision. M. Kazi</p>
     </div>
  </footer>

  <SettingsPanel />

  <!-- Router View for Stats and Settings pages -->
  <RouterView />
</div>
</template>

<style scoped>
@reference "./style.css";
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-700 to-slate-950 dark:from-white dark:via-slate-400 dark:to-white;
}
</style>
