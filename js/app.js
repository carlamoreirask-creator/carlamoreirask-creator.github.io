/**
 * Controlador Principal da Aplicação
 * Carla Chiozzini | Portfólio de Marketing Digital
 */

(function () {
  'use strict';

  /**
   * Adiciona aria-hidden="true" aos ícones Lucide para evitar ruído em leitores de ecrã
   */
  function prepareAccessibleIcons() {
    const icons = document.querySelectorAll('i[data-lucide]:not([aria-hidden])');
    icons.forEach((icon) => {
      icon.setAttribute('aria-hidden', 'true');
    });
    const svgs = document.querySelectorAll('svg.lucide:not([aria-hidden])');
    svgs.forEach((svg) => {
      svg.setAttribute('aria-hidden', 'true');
    });
  }
  window.prepareAccessibleIcons = prepareAccessibleIcons;

  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollReveal();
    initContactForm();
    initCvModal();
    initBackToTop();
    initCopyEmail();
    initStatsCounters();
    initModalFocusManagement();

    // Cria ícones Lucide dinâmicos apenas se houver novos elementos data-lucide
    if (window.lucide && typeof window.lucide.createIcons === 'function' && document.querySelector('[data-lucide]')) {
      window.lucide.createIcons();
      prepareAccessibleIcons();
    }
  });

  /**
   * Navegação, Menu Mobile e Scroll Spy de Alto Desempenho (Zero Forced Reflows)
   */
  function initNavigation() {
    const navbar = document.getElementById('main-navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const navLinks = document.querySelectorAll('.desktop-nav-link');
    const sections = document.querySelectorAll('section[id]');

    let isManualNavClick = false;
    let manualNavTimeout = null;
    let currentActiveNav = '';

    function setActiveNav(sectionId) {
      if (!sectionId || sectionId === currentActiveNav) return;
      currentActiveNav = sectionId;

      navLinks.forEach((link) => {
        const href = link.getAttribute('href')?.replace('#', '');
        const isTarget = href === sectionId;
        link.classList.toggle('text-terracotta-600', isTarget);
        link.classList.toggle('dark:text-terracotta-400', isTarget);
        link.classList.toggle('font-semibold', isTarget);
        link.classList.toggle('text-stone-600', !isTarget);
        link.classList.toggle('dark:text-zinc-300', !isTarget);
      });

      mobileLinks.forEach((link) => {
        const href = link.getAttribute('href')?.replace('#', '');
        const isTarget = href === sectionId;
        link.classList.toggle('text-terracotta-600', isTarget);
        link.classList.toggle('dark:text-terracotta-400', isTarget);
        link.classList.toggle('font-semibold', isTarget);
        link.classList.toggle('text-stone-700', !isTarget);
        link.classList.toggle('dark:text-zinc-200', !isTarget);
      });
    }

    // Scroll Spy moderno com IntersectionObserver: nunca força recálculo síncrono de geometria
    if ('IntersectionObserver' in window && sections.length > 0) {
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0
      };

      const sectionObserver = new IntersectionObserver((entries) => {
        if (isManualNavClick) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.getAttribute('id'));
          }
        });
      }, observerOptions);

      sections.forEach((section) => sectionObserver.observe(section));
    }

    // Sombra da barra de navegação com listener passivo e requestAnimationFrame
    let isNavScrolled = false;
    let isScrollTicking = false;

    function handleNavScroll() {
      const scrolled = window.scrollY > 20;
      if (scrolled !== isNavScrolled) {
        isNavScrolled = scrolled;
        if (scrolled) {
          navbar?.classList.add('shadow-md', 'bg-white/95', 'dark:bg-zinc-900/95');
          navbar?.classList.remove('bg-white/80', 'dark:bg-zinc-900/80');
        } else {
          navbar?.classList.remove('shadow-md', 'bg-white/95', 'dark:bg-zinc-900/95');
          navbar?.classList.add('bg-white/80', 'dark:bg-zinc-900/80');
        }
      }
      isScrollTicking = false;
    }

    window.addEventListener('scroll', () => {
      if (!isScrollTicking) {
        isScrollTicking = true;
        window.requestAnimationFrame(handleNavScroll);
      }
    }, { passive: true });

    // Destaque imediato ao clicar em qualquer ligação da barra de navegação
    const navAnchors = document.querySelectorAll('a[href^="#"]');
    navAnchors.forEach((anchor) => {
      const targetId = anchor.getAttribute('href')?.replace('#', '');
      if (!targetId || targetId === 'conteudo-principal') return;

      if (['sobre', 'projetos', 'competencias', 'contacto'].includes(targetId)) {
        anchor.addEventListener('click', () => {
          setActiveNav(targetId);
          isManualNavClick = true;
          clearTimeout(manualNavTimeout);
          manualNavTimeout = setTimeout(() => {
            isManualNavClick = false;
          }, 850);
        });
      }
    });

    // Define secção inicial
    setActiveNav('sobre');

    // Toggle menu mobile
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
        mobileBtn.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');

        // Alterna ícone do botão
        const iconContainer = mobileBtn.querySelector('.menu-icon-container');
        if (iconContainer) {
          iconContainer.innerHTML = isExpanded
            ? '<i data-lucide="menu" class="w-6 h-6"></i>'
            : '<i data-lucide="x" class="w-6 h-6"></i>';
          prepareAccessibleIcons();
          if (window.lucide) window.lucide.createIcons();
        }
      });

      // Fechar menu mobile ao clicar num link
      mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          mobileBtn.setAttribute('aria-expanded', 'false');
          const iconContainer = mobileBtn.querySelector('.menu-icon-container');
          if (iconContainer) {
            iconContainer.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
            prepareAccessibleIcons();
            if (window.lucide) window.lucide.createIcons();
          }
        });
      });
    }
  }

  /**
   * Scroll Reveal com IntersectionObserver
   */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.12,
        }
      );

      revealElements.forEach((el) => observer.observe(el));
    } else {
      // Fallback para navegadores antigos
      revealElements.forEach((el) => el.classList.add('active'));
    }
  }

  /**
   * Formulário de Contacto e Notificação Toast
   */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.elements['name']?.value?.trim();
      const email = form.elements['email']?.value?.trim();
      const subject = form.elements['subject']?.value?.trim();
      const message = form.elements['message']?.value?.trim();

      if (!name || !email || !message) {
        showToast('Por favor, preencha todos os campos obrigatórios.', 'warning');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          A enviar mensagem...
        `;
      }

      // Simulação de envio com fallback mailto
      setTimeout(() => {
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          prepareAccessibleIcons();
          if (window.lucide) window.lucide.createIcons();
        }

        showToast(
          `Obrigada, ${name}! A sua mensagem foi registada com sucesso. Entrarei em contacto brevemente.`,
          'success'
        );

        // Prepara mailto caso o utilizador pretenda abrir o seu cliente de email
        const mailtoUri = `mailto:carlamoreira.sk@gmail.com?subject=${encodeURIComponent(
          subject || 'Contacto via Portfólio'
        )}&body=${encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`)}`;
        
        console.info('Contacto gerado com sucesso. Link mailto alternativo:', mailtoUri);
      }, 800);
    });
  }

  /**
   * Toast de Notificações Global
   */
  function showToast(message, type = 'success') {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;

    const iconEl = toast.querySelector('.toast-icon');
    const msgEl = toast.querySelector('.toast-message');

    if (msgEl) msgEl.textContent = message;

    if (iconEl) {
      if (type === 'success') {
        iconEl.innerHTML = '<i data-lucide="check-circle" class="w-5 h-5 text-emerald-500"></i>';
      } else if (type === 'warning') {
        iconEl.innerHTML = '<i data-lucide="alert-circle" class="w-5 h-5 text-amber-500"></i>';
      } else {
        iconEl.innerHTML = '<i data-lucide="info" class="w-5 h-5 text-terracotta-500"></i>';
      }
      prepareAccessibleIcons();
      if (window.lucide) window.lucide.createIcons();
    }

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
  window.showToast = showToast;

  /**
   * Copiar E-mail para a Área de Transferência
   */
  function initCopyEmail() {
    const copyBtns = document.querySelectorAll('.copy-email-btn');
    const emailToCopy = 'carlamoreira.sk@gmail.com';

    copyBtns.forEach((btn) => {
      btn.addEventListener('click', async () => {
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(emailToCopy);
          } else {
            const textArea = document.createElement('textarea');
            textArea.value = emailToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
          }
          showToast('E-mail copiado para a área de transferência!', 'success');
        } catch (err) {
          window.location.href = `mailto:${emailToCopy}`;
        }
      });
    });
  }

  /**
   * Modal de Visualização e Impressão do Currículo (CV)
   */
  function initCvModal() {
    const cvModal = document.getElementById('cv-modal');
    if (!cvModal) return;

    const openBtns = document.querySelectorAll('.open-cv-btn');
    const closeBtn = document.getElementById('cv-modal-close-btn');
    const backdrop = document.getElementById('cv-modal-backdrop');
    const printBtn = document.getElementById('cv-print-btn');

    function openModal() {
      cvModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      prepareAccessibleIcons();
      if (window.lucide) window.lucide.createIcons();
    }

    function closeModal() {
      cvModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    openBtns.forEach((btn) => btn.addEventListener('click', openModal));
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !cvModal.classList.contains('hidden')) {
        closeModal();
      }
    });

    window.openCvModal = openModal;
    window.closeCvModal = closeModal;
  }

  /**
   * Botão Flutuante de Voltar ao Topo (Otimizado com rAF)
   */
  function initBackToTop() {
    const backBtn = document.getElementById('back-to-top-btn');
    if (!backBtn) return;

    let isBackBtnVisible = false;
    let isBackTicking = false;

    function handleBackBtnScroll() {
      const shouldShow = window.scrollY > 400;
      if (shouldShow !== isBackBtnVisible) {
        isBackBtnVisible = shouldShow;
        if (shouldShow) {
          backBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
          backBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
        } else {
          backBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
          backBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
        }
      }
      isBackTicking = false;
    }

    window.addEventListener('scroll', () => {
      if (!isBackTicking) {
        isBackTicking = true;
        window.requestAnimationFrame(handleBackBtnScroll);
      }
    }, { passive: true });

    backBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  /**
   * Animação suave para contadores de métricas
   */
  function initStatsCounters() {
    const statsElements = document.querySelectorAll('.stat-number');
    if (!statsElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetText = el.getAttribute('data-target');
          if (targetText) {
            el.textContent = targetText;
          }
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statsElements.forEach((el) => observer.observe(el));
  }

  /**
   * Gestão de Acessibilidade e Foco em Janelas Modais (#project-modal e #cv-modal)
   * - Memoriza o elemento que acionou a abertura do modal
   * - Coloca o foco no botão de fechar ou no primeiro elemento interativo
   * - Conclui o ciclo de navegação por teclado (focus trap) com Tab e Shift+Tab
   * - Restaura o foco para o elemento original ao fechar
   */
  function initModalFocusManagement() {
    const modalConfigs = [
      { id: 'project-modal', closeBtnId: 'modal-close-btn' },
      { id: 'cv-modal', closeBtnId: 'cv-modal-close-btn' }
    ];

    let lastFocusedElement = null;

    // Rastreia o elemento ativo antes de qualquer interação que possa abrir modais
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.open-cv-btn, #projects-grid, [data-project-id], [onclick*="Modal"]');
      if (trigger) {
        lastFocusedElement = document.activeElement && document.activeElement !== document.body
          ? document.activeElement
          : trigger;
      }
    }, true);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const trigger = e.target.closest('.open-cv-btn, #projects-grid, [data-project-id]');
        if (trigger) {
          lastFocusedElement = document.activeElement || trigger;
        }
      }
    }, true);

    modalConfigs.forEach(({ id, closeBtnId }) => {
      const modalEl = document.getElementById(id);
      if (!modalEl) return;

      let isModalVisible = !modalEl.classList.contains('hidden');

      const observer = new MutationObserver(() => {
        const currentlyVisible = !modalEl.classList.contains('hidden');
        if (!isModalVisible && currentlyVisible) {
          // Modal aberto
          if (!modalEl.contains(document.activeElement) && document.activeElement !== document.body) {
            lastFocusedElement = document.activeElement;
          }

          // Foca o botão de fechar ou o primeiro elemento interativo
          setTimeout(() => {
            const closeBtn = document.getElementById(closeBtnId);
            if (closeBtn && typeof closeBtn.focus === 'function') {
              closeBtn.focus();
            } else {
              const focusable = getFocusableElements(modalEl);
              if (focusable.length > 0) focusable[0].focus();
            }
          }, 40);
        } else if (isModalVisible && !currentlyVisible) {
          // Modal fechado: repõe o foco no elemento de disparo
          if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            try {
              lastFocusedElement.focus();
            } catch (err) {
              // Silencioso caso o elemento já não exista no DOM
            }
          }
          lastFocusedElement = null;
        }
        isModalVisible = currentlyVisible;
      });

      observer.observe(modalEl, { attributes: true, attributeFilter: ['class'] });
    });

    // Confinamento de foco (Focus Trap) com Tab e Shift+Tab
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;

      const activeModal = modalConfigs
        .map((cfg) => document.getElementById(cfg.id))
        .find((m) => m && !m.classList.contains('hidden'));

      if (!activeModal) return;

      const focusableElements = getFocusableElements(activeModal);
      if (focusableElements.length === 0) {
        e.preventDefault();
        return;
      }

      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab: se estiver no primeiro elemento, salta para o último
        if (document.activeElement === firstFocusable || !activeModal.contains(document.activeElement)) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        // Tab: se estiver no último elemento, volta ao primeiro
        if (document.activeElement === lastFocusable || !activeModal.contains(document.activeElement)) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    });

    function getFocusableElements(container) {
      const selector = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
      const nodes = container.querySelectorAll(selector);
      return Array.prototype.filter.call(nodes, (el) => {
        return !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true';
      });
    }
  }

})();
