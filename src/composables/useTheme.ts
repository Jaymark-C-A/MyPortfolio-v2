// src/composables/useTheme.ts
import { ref, onMounted } from 'vue';

const theme = ref('light'); // Default theme

export function useTheme() {
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      theme.value = savedTheme;
    }
    document.documentElement.setAttribute('data-theme', theme.value);
  });

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme.value);
    document.body.className = theme.value; // Apply theme to body
    localStorage.setItem('theme', theme.value);

  };

  return {
    theme,
    toggleTheme,
  };
}
