/**
 * Gestor de Tema (Light / Dark Mode)
 * Carla Chiozzini Portfolio
 */

(function () {
  'use strict';

  const THEME_KEY = 'carla_portfolio_theme';

  const SUN_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun w-5 h-5 text-amber-400 transition-transform duration-300 hover:rotate-45" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
  const MOON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon w-5 h-5 text-stone-700 dark:text-stone-300 transition-transform duration-300 hover:-rotate-12" aria-hidden="true"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>';

  let currentRenderedTheme = 'light';

  function getPreferredTheme() {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(THEME_KEY, theme);
    updateThemeToggleButtons(theme);
  }

  function updateThemeToggleButtons(theme) {
    const isDark = theme === 'dark';
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      btn.setAttribute('aria-label', isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro');
      btn.setAttribute('title', isDark ? 'Modo claro' : 'Modo escuro');
      
      const iconSpan = btn.querySelector('.theme-icon-container');
      if (iconSpan && (currentRenderedTheme !== theme || !iconSpan.firstElementChild)) {
        iconSpan.innerHTML = isDark ? SUN_SVG : MOON_SVG;
      }
    });
    currentRenderedTheme = theme;
  }

  window.toggleTheme = function () {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  // Inicialização no carregamento imediato
  const initialTheme = getPreferredTheme();
  if (initialTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }

  // Escuta mudanças de tema a nível do sistema operativo
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Re-vincula cliques quando o DOM carregar
  document.addEventListener('DOMContentLoaded', () => {
    const isDark = document.documentElement.classList.contains('dark');
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', window.toggleTheme);
    });
    if (isDark) {
      updateThemeToggleButtons('dark');
    }
  });
})();
