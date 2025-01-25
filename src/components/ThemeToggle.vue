<!-- src/components/ThemeToggle.vue -->
<template>
    <button @click="toggleTheme" aria-label="Toggle theme" class="px-2 text-primary"  style="font-size: 16px; border: none; border-radius: 10px;">
      <i :class="iconClass"></i>
    </button>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useTheme } from '@/composables/useTheme';
  
  export default defineComponent({
    setup() {
      const { theme, toggleTheme } = useTheme();
  
      const iconClass = computed(() => {
        return theme.value === 'light' ? 'fas fa-sun' : 'fas fa-moon';
      });
  
      return {
        iconClass,
        toggleTheme,
      };
    },
  });
  </script>
  