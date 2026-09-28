/**
 * Gestor de Tema (Light / Dark Mode)
 * Carla Chiozzini Portfolio
 */

(function () {
  const THEME_KEY = 'carla_portfolio_theme';

  function getPreferredTheme() {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme) {
      return storedTheme;
    }
    // Verifica preferência do sistema operativo
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
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      const isDark = theme === 'dark';
      btn.setAttribute('aria-label', isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro');
      btn.setAttribute('title', isDark ? 'Modo claro' : 'Modo escuro');
      
      const iconSpan = btn.querySelector('.theme-icon-container');
      if (iconSpan) {
        iconSpan.innerHTML = isDark
          ? '<i data-lucide="sun" class="w-5 h-5 text-amber-400 transition-transform duration-300 hover:rotate-45" aria-hidden="true"></i>'
          : '<i data-lucide="moon" class="w-5 h-5 text-stone-700 dark:text-stone-300 transition-transform duration-300 hover:-rotate-12" aria-hidden="true"></i>';
      }
    });

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  window.toggleTheme = function () {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  // Inicialização no carregamento imediato para evitar flicker
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Escuta mudanças de tema a nível do sistema operativo
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Re-vincula cliques quando o DOM carregar
  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', window.toggleTheme);
    });
    updateThemeToggleButtons(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });
})();
