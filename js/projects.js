/**
 * Gestor de Projetos e Modal de Casos de Estudo com Suporte Multimédia Completo
 * Carla Chiozzini Portfolio
 */

(function () {
  let activeCategory = 'all';

  function initProjects() {
    renderCategoryFilters();
    renderProjectCards('all');
    setupModalEvents();
  }

  // Renderiza botões de filtro de categorias
  function renderCategoryFilters() {
    const filterContainer = document.getElementById('project-filters');
    if (!filterContainer) return;

    filterContainer.innerHTML = '';

    PORTFOLIO_DATA.categories.forEach((cat) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `filter-btn px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 border ${
        cat.id === activeCategory
          ? 'bg-terracotta-500 text-white border-terracotta-500 shadow-sm'
          : 'bg-white dark:bg-[#1C1C1E] text-stone-700 dark:text-zinc-300 border-black/5 dark:border-white/10 hover:border-terracotta-400 hover:text-terracotta-600 dark:hover:text-terracotta-400'
      }`;
      btn.setAttribute('data-category', cat.id);
      btn.textContent = cat.label;

      btn.addEventListener('click', () => {
        if (activeCategory === cat.id) return;
        activeCategory = cat.id;

        // Atualiza estilo dos botões
        document.querySelectorAll('.filter-btn').forEach((b) => {
          const isSelected = b.getAttribute('data-category') === activeCategory;
          b.className = `filter-btn px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 border ${
            isSelected
              ? 'bg-terracotta-500 text-white border-terracotta-500 shadow-sm'
              : 'bg-white dark:bg-[#1C1C1E] text-stone-700 dark:text-zinc-300 border-black/5 dark:border-white/10 hover:border-terracotta-400 hover:text-terracotta-600 dark:hover:text-terracotta-400'
          }`;
        });

        renderProjectCards(activeCategory);
      });

      filterContainer.appendChild(btn);
    });
  }

  // Renderiza a grelha de cartões de projeto com Imagens de Capa e Vídeos
  function renderProjectCards(category) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const filtered = category === 'all'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter(p => p.category === category);

    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-12 text-stone-500 dark:text-zinc-400">
          Nenhum projeto encontrado nesta categoria.
        </div>
      `;
      return;
    }

    filtered.forEach((proj) => {
      const card = document.createElement('article');
      card.className = 'interactive-card group relative flex flex-col justify-between bg-white dark:bg-[#1C1C1E] rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer';
      card.setAttribute('data-id', proj.id);

      // Estilo neutro e minimalista de badge de categoria (estilo Apple)
      const badgeStyle = 'bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/5 dark:border-white/10 font-medium text-xs';

      const tagsHtml = proj.tags.map(tag => `
        <span class="inline-block text-xs font-medium px-2.5 py-1 rounded-md bg-stone-100 dark:bg-zinc-700/60 text-stone-600 dark:text-zinc-300 border border-stone-200/60 dark:border-zinc-600/40">
          #${tag}
        </span>
      `).join('');

      // Badge de Formato / Recurso (Posicionado abaixo da capa, ao lado da categoria)
      let formatBadgeHtml = '';
      if (proj.mediaType === 'video' || proj.videoUrl) {
        formatBadgeHtml = `
          <span class="badge-tag bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/5 dark:border-white/10 flex items-center gap-1.5 font-medium text-xs">
            <i data-lucide="clapperboard" class="w-3.5 h-3.5 text-terracotta-600 dark:text-terracotta-400"></i>
            <span>${proj.id === 'imob-vr' ? 'Vídeo CapCut' : 'Vídeo demo'}</span>
          </span>
        `;
      } else if (proj.id === 'banco-ctt' || (proj.link && proj.link.includes('canva'))) {
        formatBadgeHtml = `
          <span class="badge-tag bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/5 dark:border-white/10 flex items-center gap-1.5 font-medium text-xs">
            <i data-lucide="presentation" class="w-3.5 h-3.5 text-terracotta-600 dark:text-terracotta-400"></i>
            <span>Canva</span>
          </span>
        `;
      } else if (proj.pdfUrl || (proj.link && proj.link.endsWith('.pdf'))) {
        let pdfBadgeText = 'Relatório PDF';
        if (proj.id === 'havaianas-storytelling') {
          pdfBadgeText = 'Estratégia PDF';
        } else if (proj.id === 'meta-ads-local') {
          pdfBadgeText = 'Documentação PDF';
        }
        formatBadgeHtml = `
          <span class="badge-tag bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/5 dark:border-white/10 flex items-center gap-1.5 font-medium text-xs">
            <i data-lucide="file-text" class="w-3.5 h-3.5 text-terracotta-600 dark:text-terracotta-400"></i>
            <span>${pdfBadgeText}</span>
          </span>
        `;
      } else if (proj.link) {
        formatBadgeHtml = `
          <span class="badge-tag bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/5 dark:border-white/10 flex items-center gap-1.5 font-medium text-xs">
            <i data-lucide="globe" class="w-3.5 h-3.5 text-terracotta-600 dark:text-terracotta-400"></i>
            <span>Página ativa</span>
          </span>
        `;
      }

      card.innerHTML = `
        <!-- Conteúdo do Cartão -->
        <div class="p-6 sm:p-7 flex flex-col justify-between flex-grow">
          <div>
            <!-- Tags de Contexto, Categoria & Formato -->
            <div class="flex flex-wrap items-center gap-2 mb-3.5">
              <span class="badge-tag bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/5 dark:border-white/10 font-semibold text-xs shadow-xs">
                Projeto de formação
              </span>
              <span class="badge-tag bg-[#F5F5F7] dark:bg-[#2C2C2E] text-stone-600 dark:text-zinc-300 border border-black/5 dark:border-white/10 font-medium text-xs shadow-xs">
                ${proj.categoryLabel}
              </span>
              ${formatBadgeHtml}
            </div>

            <div class="flex items-start justify-between gap-2 mb-2">
              <h3 class="text-xl font-bold text-stone-900 dark:text-white group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors line-clamp-2">
                ${proj.title}
              </h3>
            </div>

            <!-- Resumo -->
            <p class="text-stone-600 dark:text-zinc-300 text-sm leading-relaxed mb-5 line-clamp-3">
              ${proj.summary}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              ${tagsHtml}
            </div>
          </div>

          <!-- Rodapé do Cartão / Ações -->
          <div class="pt-4 border-t border-stone-100 dark:border-zinc-700/70 flex items-center justify-end mt-auto">
            <button type="button" 
                    class="open-details-btn inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600 dark:text-terracotta-400 hover:text-terracotta-700 dark:hover:text-terracotta-300 transition-colors group-hover:translate-x-1 duration-200"
                    data-project-id="${proj.id}">
              <span>Saber mais<span class="sr-only"> sobre o projeto ${proj.title}</span></span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        openProjectModal(proj.id);
      });

      grid.appendChild(card);
    });

    // Re-renderiza ícones do Lucide
    if (window.prepareAccessibleIcons) {
      window.prepareAccessibleIcons();
    }
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // Lógica do Modal com Renderização Multimédia
  function setupModalEvents() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    const closeBtn = document.getElementById('modal-close-btn');
    const backdrop = document.getElementById('modal-backdrop');

    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
    if (backdrop) backdrop.addEventListener('click', closeProjectModal);

    // Tecla Escape para fechar
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeProjectModal();
      }
    });
  }

  function openProjectModal(projectId) {
    const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!proj) return;

    const modal = document.getElementById('project-modal');
    const titleEl = document.getElementById('modal-title');
    const categoryEl = document.getElementById('modal-category');
    const summaryEl = document.getElementById('modal-summary');
    const desafioEl = document.getElementById('modal-desafio');
    const solucaoEl = document.getElementById('modal-solucao');
    const estrategiaEl = document.getElementById('modal-estrategia');
    const entregaveisEl = document.getElementById('modal-entregaveis');
    const impactoEl = document.getElementById('modal-impacto');
    const tagsContainer = document.getElementById('modal-tags');
    const linkBtnContainer = document.getElementById('modal-link-btn-container');
    const mediaContainer = document.getElementById('modal-media-container');

    if (titleEl) titleEl.textContent = proj.title;
    if (categoryEl) categoryEl.textContent = proj.categoryLabel;
    if (summaryEl) summaryEl.textContent = proj.summary;
    if (desafioEl) desafioEl.textContent = proj.details.desafio;
    if (solucaoEl) solucaoEl.textContent = proj.details.solucao;
    if (entregaveisEl) entregaveisEl.textContent = proj.details.entregaveis;
    if (impactoEl) impactoEl.textContent = proj.details.impacto;

    const entregaveisTitleEl = document.getElementById('modal-entregaveis-title');
    const impactoTitleEl = document.getElementById('modal-impacto-title');
    if (entregaveisTitleEl) {
      entregaveisTitleEl.textContent = proj.details.entregaveisTitle || 'Entregáveis do projeto';
    }
    if (impactoTitleEl) {
      impactoTitleEl.textContent = proj.details.impactoTitle || 'Competências desenvolvidas';
    }

    // Renderização da Área Multimédia (Vídeo ou Galeria/Imagem)
    if (mediaContainer) {
      if (proj.mediaType === 'video') {
        // Título descritivo do vídeo
        let videoDesc = 'Vídeo de demonstração do projeto (MP4)';
        if (proj.id === 'imob-vr') {
          videoDesc = 'Vídeo promocional PropTech: edição e guião no CapCut';
        } else if (proj.id === 'depois-do-cafe') {
          videoDesc = 'Navegação e demonstração da landing page no Wix';
        } else if (proj.id === 'muda-o-jogo') {
          videoDesc = 'Vídeo teaser omnicanal e demonstração no Wix';
        }

        mediaContainer.className = 'w-full space-y-4';
        mediaContainer.innerHTML = `
          <!-- Leitor de Vídeo Promocional -->
          <div class="rounded-2xl overflow-hidden bg-black border border-black/5 dark:border-white/10 shadow-sm">
            <div class="relative aspect-video w-full bg-black">
              <video id="modal-video-player" 
                     controls 
                     playsinline 
                     preload="metadata"
                     class="w-full h-full object-contain">
                <source src="${proj.videoUrl}" type="video/mp4">
                O seu navegador não suporta este formato de vídeo. Pode descarregar o ficheiro através da ligação disponibilizada abaixo.
              </video>
            </div>
            <div class="p-3.5 sm:p-4 bg-[#F5F5F7] dark:bg-[#1C1C1E] text-xs text-stone-700 dark:text-[#F5F5F7] flex items-center justify-between border-t border-black/5 dark:border-white/10">
              <span class="flex items-center gap-2 font-medium">
                <i data-lucide="clapperboard" class="w-4 h-4 text-terracotta-600 dark:text-[#DD8959] shrink-0"></i>
                <span>${videoDesc}</span>
              </span>
              ${proj.videoUrl ? `
                <a href="${proj.videoUrl}" target="_blank" download class="hover:text-terracotta-600 dark:hover:text-terracotta-400 flex items-center gap-1.5 font-semibold text-terracotta-600 dark:text-[#DD8959] transition-colors shrink-0">
                  <span>Descarregar MP4</span>
                  <i data-lucide="download" class="w-3.5 h-3.5"></i>
                </a>
              ` : ''}
            </div>
          </div>

          ${proj.link ? `
            <div class="p-4 sm:p-5 rounded-2xl bg-terracotta-50/80 dark:bg-terracotta-950/30 border border-terracotta-200/80 dark:border-terracotta-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="flex items-center gap-3.5 min-w-0">
                <div class="w-10 h-10 rounded-xl bg-terracotta-100 dark:bg-terracotta-900/50 text-terracotta-600 dark:text-terracotta-300 flex items-center justify-center shrink-0">
                  <i data-lucide="globe" class="w-5 h-5"></i>
                </div>
                <div class="min-w-0">
                  <span class="block text-sm font-bold text-stone-900 dark:text-white leading-tight mb-0.5">
                    Aceder à página no Wix
                  </span>
                  <span class="block text-xs text-stone-500 dark:text-zinc-400 leading-normal">
                    Aceda à página publicada para analisar a estrutura de conteúdos, a disposição do formulário e a navegação.
                  </span>
                </div>
              </div>
              <div class="shrink-0 w-full sm:w-auto">
                <a href="${proj.link}" target="_blank" rel="noopener noreferrer"
                   class="btn-terracotta inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs shrink-0 shadow-sm hover:scale-[1.02] transition-transform w-full sm:w-auto">
                  <span>${proj.linkText || 'Aceder à página no Wix'}</span>
                  <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                </a>
              </div>
            </div>
          ` : ''}
        `;
        mediaContainer.classList.remove('hidden');
      } else {
        const isPdf = Boolean(proj.pdfUrl || (proj.link && proj.link.endsWith('.pdf')));
        const isCanva = Boolean(proj.link && proj.link.includes('canva'));

        let ctaBannerHtml = '';
        if (proj.link) {
          if (isPdf) {
            let pdfTitle = 'Relatório de auditoria e pesquisa em PDF';
            let pdfSub = 'Consulte o estudo prático de SERP, leilões no Google, concorrência e PageSpeed.';
            if (proj.id === 'havaianas-storytelling') {
              pdfTitle = 'Estratégia de storytelling em PDF';
              pdfSub = 'Consulte a proposta narrativa, tom de voz, regras criativas e canais.';
            } else if (proj.id === 'meta-ads-local') {
              pdfTitle = 'Estratégia e documentação em PDF';
              pdfSub = 'Consulte a configuração técnica, segmentação geográfica, criativos dinâmicos e parametrização no Gestor de Anúncios.';
            }
            ctaBannerHtml = `
              <div class="p-4 sm:p-5 rounded-2xl bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-black/5 dark:border dark:border-white/10 dark:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="flex items-center gap-3.5 min-w-0">
                  <div class="w-10 h-10 rounded-xl bg-[#F5F5F7] dark:bg-zinc-800 text-terracotta-600 dark:text-[#DD8959] border border-black/5 dark:border-white/10 flex items-center justify-center shrink-0">
                    <i data-lucide="file-text" class="w-5 h-5"></i>
                  </div>
                  <div class="min-w-0">
                    <span class="block text-sm font-bold text-stone-900 dark:text-[#F5F5F7] leading-tight mb-0.5">
                      ${pdfTitle}
                    </span>
                    <span class="block text-xs text-stone-500 dark:text-zinc-400 leading-normal">
                      ${pdfSub}
                    </span>
                  </div>
                </div>
                <div class="shrink-0 w-full sm:w-auto">
                  <a href="${proj.link}" target="_blank" rel="noopener noreferrer"
                     class="btn-terracotta inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs shrink-0 shadow-sm hover:scale-[1.02] transition-transform w-full sm:w-auto">
                    <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
                    <span>${proj.linkText || 'Consultar relatório em PDF'}</span>
                  </a>
                </div>
              </div>
            `;
          } else if (isCanva) {
            const canvaTitle = (proj.id === 'banco-ctt')
              ? 'Apresentação do projeto'
              : 'Apresentação completa da estratégia';
            const canvaDesc = (proj.id === 'banco-ctt')
              ? 'Consulte o documento completo com a estratégia, personas e materiais de apoio no Canva.'
              : 'Consulte o documento completo e estratégia de inovação no Canva.';

            ctaBannerHtml = `
              <div class="p-4 sm:p-5 rounded-2xl bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-black/5 dark:border dark:border-white/10 dark:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="flex items-center gap-3.5 min-w-0">
                  <div class="w-10 h-10 rounded-xl bg-[#F5F5F7] dark:bg-zinc-800 text-terracotta-600 dark:text-[#DD8959] border border-black/5 dark:border-white/10 flex items-center justify-center shrink-0">
                    <i data-lucide="presentation" class="w-5 h-5"></i>
                  </div>
                  <div class="min-w-0">
                    <span class="block text-sm font-bold text-stone-900 dark:text-[#F5F5F7] leading-tight mb-0.5">
                      ${canvaTitle}
                    </span>
                    <span class="block text-xs text-stone-500 dark:text-zinc-400 leading-normal">
                      ${canvaDesc}
                    </span>
                  </div>
                </div>
                <div class="shrink-0 w-full sm:w-auto">
                  <a href="${proj.link}" target="_blank" rel="noopener noreferrer"
                     class="btn-terracotta inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs shrink-0 shadow-sm hover:scale-[1.02] transition-transform w-full sm:w-auto">
                    <span>${proj.linkText || 'Consultar apresentação no Canva'}</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                  </a>
                </div>
              </div>
            `;
          } else {
            const bannerTitle = 'Aceder à página no Wix';
            const bannerSub = 'Aceda à página publicada para analisar a estrutura de conteúdos, a disposição do formulário e a navegação.';

            ctaBannerHtml = `
              <div class="p-4 sm:p-5 rounded-2xl bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-black/5 dark:border dark:border-white/10 dark:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="flex items-center gap-3.5 min-w-0">
                  <div class="w-10 h-10 rounded-xl bg-[#F5F5F7] dark:bg-zinc-800 text-terracotta-600 dark:text-[#DD8959] border border-black/5 dark:border-white/10 flex items-center justify-center shrink-0">
                    <i data-lucide="globe" class="w-5 h-5"></i>
                  </div>
                  <div class="min-w-0">
                    <span class="block text-sm font-bold text-stone-900 dark:text-[#F5F5F7] leading-tight mb-0.5">
                      ${bannerTitle}
                    </span>
                    <span class="block text-xs text-stone-500 dark:text-zinc-400 leading-normal">
                      ${bannerSub}
                    </span>
                  </div>
                </div>
                <div class="shrink-0 w-full sm:w-auto">
                  <a href="${proj.link}" target="_blank" rel="noopener noreferrer"
                     class="btn-terracotta inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs shrink-0 shadow-sm hover:scale-[1.02] transition-transform w-full sm:w-auto">
                    <span>${proj.linkText || 'Aceder à página no Wix'}</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                  </a>
                </div>
              </div>
            `;
          }
        }

        mediaContainer.className = 'w-full';
        if (ctaBannerHtml) {
          mediaContainer.innerHTML = ctaBannerHtml;
          mediaContainer.classList.remove('hidden');
        } else {
          mediaContainer.innerHTML = '';
          mediaContainer.classList.add('hidden');
        }
      }
    }

    // Estratégia em lista
    if (estrategiaEl) {
      estrategiaEl.innerHTML = '';
      proj.details.estrategia.forEach(item => {
        const li = document.createElement('li');
        li.className = 'flex items-start gap-2 text-stone-700 dark:text-[#F5F5F7] text-sm leading-relaxed';
        li.innerHTML = `
          <i data-lucide="check-circle-2" class="w-4 h-4 text-terracotta-600 dark:text-[#DD8959] shrink-0 mt-0.5"></i>
          <span>${item}</span>
        `;
        estrategiaEl.appendChild(li);
      });
    }

    // Tags
    if (tagsContainer) {
      tagsContainer.innerHTML = proj.tags.map(t => `
        <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F5F5F7] dark:bg-[#1C1C1E] text-stone-700 dark:text-[#F5F5F7] border border-black/5 dark:border-white/10">
          #${t}
        </span>
      `).join('');
    }

    // Link Externo (se existir)
    if (linkBtnContainer) {
      if (proj.link) {
        const isPdf = Boolean(proj.pdfUrl || (proj.link && proj.link.endsWith('.pdf')));
        const isCanva = Boolean(proj.link && proj.link.includes('canva'));
        let ctaLabel = proj.linkText || 'Aceder ao website do projeto';
        let ctaIcon = 'external-link';

        if (isPdf) {
          ctaLabel = proj.linkText || 'Consultar relatório em PDF';
          ctaIcon = 'file-text';
        } else if (isCanva) {
          ctaLabel = proj.linkText || 'Consultar apresentação no Canva';
          ctaIcon = 'presentation';
        }

        linkBtnContainer.innerHTML = `
          <a href="${proj.link}" target="_blank" rel="noopener noreferrer"
             class="btn-terracotta inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm shadow-sm hover:scale-[1.02] transition-transform">
            <span>${ctaLabel}</span>
            <i data-lucide="${ctaIcon}" class="w-4 h-4"></i>
          </a>
        `;
        linkBtnContainer.classList.remove('hidden');
      } else {
        linkBtnContainer.innerHTML = '';
        linkBtnContainer.classList.add('hidden');
      }
    }

    // Abre modal
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    if (window.prepareAccessibleIcons) {
      window.prepareAccessibleIcons();
    }
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    // Pausa vídeo em reprodução ao fechar o modal
    const video = modal.querySelector('video');
    if (video) {
      try {
        video.pause();
        video.currentTime = 0;
      } catch (err) {
        // silencioso
      }
    }

    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  window.openProjectModal = openProjectModal;
  window.closeProjectModal = closeProjectModal;

  document.addEventListener('DOMContentLoaded', initProjects);
})();
