/**
 * Dados do Portfólio de Carla Chiozzini
 * Especialista em Marketing Digital
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Carla Chiozzini",
    role: "Especialista em marketing digital",
    headline: "Transformo dados, design e estratégia em presença digital com resultados reais.",
    subheadline: "Alinho visão estratégica, tráfego pago (Meta/Google Ads), SEO, produção audiovisual, CRM e inovação com inteligência artificial.",
    email: "carlamoreira.sk@gmail.com",
    location: "Portugal",
    linkedin: "https://www.linkedin.com/in/carla-chiozzini/",
    badge: "Especialista em marketing digital e estratégia 360°",
    yearsExperience: "11+",
    educationMain: "Técnica especialista em marketing digital | IEFP Sintra"
  },

  about: {
    bio: "Com mais de 11 anos de experiência acumulada em processos administrativos e de gestão combinados com a execução prática de marketing digital, destaco-me pela organização, autonomia e foco no retorno sobre o investimento. Lidei com a presença digital completa na área imobiliária, gerindo campanhas de Meta e Google Ads, CRM, produção de conteúdo multimédia, redes sociais e a implementação pioneira de Inteligência Artificial para atendimento ao cliente. Atualmente a concluir a especialização como Técnica Especialista em Marketing Digital pelo IEFP Sintra.",
    
    pillars: [
      {
        id: "pillar-1",
        title: "Visão 360°",
        subtitle: "Tráfego pago, SEO, CRM e nutrição de leads",
        description: "Planeamento e orquestração de ecossistemas digitais completos, garantindo que cada ponto de contacto conduz o utilizador da descoberta à conversão com foco contínuo no ROI.",
        icon: "compass"
      },
      {
        id: "pillar-2",
        title: "Inovação e multimédia",
        subtitle: "Implementação de IA, vídeo (CapCut) e realidade aumentada",
        description: "Adoção pioneira de automação inteligente e inteligência artificial para atendimento ao cliente, aliada à narrativa audiovisual dinâmica e tecnologias imersivas.",
        icon: "sparkles"
      },
      {
        id: "pillar-3",
        title: "Base sólida",
        subtitle: "Experiência administrativa, rigor analítico e gestão remota",
        description: "Mais de 11 anos de experiência acumulada em processos e rotinas administrativas que conferem uma disciplina analítica ímpar, rigor na alocação de orçamentos e elevado grau de autonomia.",
        icon: "shield-check"
      }
    ],

    education: [
      {
        title: "Técnica especialista em marketing digital",
        institution: "IEFP Sintra",
        period: "Em conclusão",
        description: "Formação avançada em estratégia omnicanal, SEO, SEA, CRM, Web Analytics, Estratégia de Conteúdos e Campanhas Digitais Integradas.",
        badge: "Especialização Nível 5"
      },
      {
        title: "Tecnólogo em design de interiores",
        institution: "FAAL",
        period: "Ensino Superior / Concluído",
        description: "Desenvolvimento de sensibilidade estética, proporção espacial, psicologia das cores e experiência do utilizador que enriquecem o design visual e UX.",
        badge: "Ensino Superior"
      }
    ],

    certifications: [
      {
        name: "Google Ads Search",
        issuer: "Google Skillshop",
        icon: "award"
      },
      {
        name: "UX Metrics 2.0",
        issuer: "Design & UX Academy",
        icon: "bar-chart-3"
      },
      {
        name: "Design Thinking",
        issuer: "Inovação e metodologias ágeis",
        icon: "lightbulb"
      }
    ]
  },

  categories: [
    { id: "all", label: "Todos" },
    { id: "estrategia", label: "Estratégia e storytelling" },
    { id: "landing-pages", label: "Landing pages" },
    { id: "trafego", label: "Tráfego pago" },
    { id: "seo", label: "SEO e pesquisa" },
    { id: "multimedia", label: "Multimédia" }
  ],

  projects: [
    {
      id: "banco-ctt",
      title: "Banco CTT | Link Seguro e estratégia Gen Z",
      category: "estrategia",
      categoryLabel: "Estratégia e storytelling",
      summary: "Trabalho desenvolvido no âmbito da unidade curricular Conceber e Implementar a Estratégia de Marketing Digital no IEFP Sintra. O projeto consistiu na criação do conceito Link Seguro para o Banco CTT, uma solução pensada para jovens universitários que compram e vendem em plataformas como OLX e Vinted, integrando pagamentos por MBWay com a verificação de encomendas nos Cacifos CTT.",
      tags: ["EstratégiaDigital", "MarketingMulticanal", "LandingPagesWix", "FunilAIDA", "Storytelling", "GeraçãoZ"],
      metrics: "Simulação Prática | IEFP Sintra",
      coverImage: "assets/images/banco-ctt-cover.png",
      mediaType: "image",
      link: "https://canva.link/4if9xkxbdhkzjz6",
      linkText: "Consultar apresentação no Canva",
      details: {
        desafio: "A Geração Z recorre com frequência ao comércio de artigos usados entre particulares, mas depara-se constantemente com a insegurança e o risco de burlas associadas a transferências imediatas e entregas presenciais.",
        solucao: "Desenvolvimento do conceito Link Seguro: o vendedor gera uma ligação na app do Banco CTT, o comprador realiza o pagamento garantido por MBWay e o montante permanece retido até 24 horas após a recolha do artigo num Cacifo CTT, validada pelo controlo de peso da encomenda.",
        estrategia: [
          "Funil AIDA estruturado: fase de atração com cartazes perto de polos universitários e dark posts provocatórios, fase de consideração com conteúdos dinâmicos e fase de ação na aplicação móvel.",
          "Criação de landing page no Wix: desenho de uma página focada em recolha de contactos e esclarecimento do funcionamento do serviço.",
          "Persona e tom de voz: construção da persona Mariana Costa, estudante de 21 anos que vende peças vintage, adaptando a linguagem aos seus hábitos de consumo digital.",
          "Ativação com criadores de conteúdo: plano de cooperação simulada com a criadora Caetana Botelho Rodrigues para demonstração prática e humanização da mensagem.",
          "Identidade visual: aplicação de um conceito gráfico em Claymation 3D com a paleta oficial do Banco CTT (vermelho, verde e turquesa)."
        ],
        entregaveisTitle: "Entregáveis do projeto",
        entregaveis: "Landing page estruturada no Wix, mapa de funil AIDA, matriz de personas, cronograma de publicação, peças gráficas para redes sociais e outdoor com QR Code.",
        impactoTitle: "Competências desenvolvidas",
        impacto: "Exercício prático de planeamento de campanhas multicanal, articulação entre marketing digital e canais físicos, definição de propostas de valor e adequação de linguagem a nichos de mercado."
      }
    },
    {
      id: "detetive-pesquisa",
      title: "Detetive de Pesquisa | SEO local e mercado LSF",
      category: "seo",
      categoryLabel: "SEO e pesquisa",
      summary: "Estudo prático e auditoria digital desenvolvidos no âmbito da formação de Marketing Digital no IEFP Sintra, aplicados ao setor de construção em Light Steel Frame (LSF) em Portugal. Reuniu uma análise comparativa entre pesquisa anónima e personalizada, avaliação de velocidade no PageSpeed Insights e diagnóstico de posicionamento na página de resultados do Google.",
      tags: ["SEOLocal", "GoogleSearch", "IntençãodeBusca", "PesquisadeMercado", "Benchmarking", "ConstruçãoLSF"],
      metrics: "Simulação Prática | IEFP Sintra",
      coverImage: "assets/images/detetive-pesquisa-seo.png",
      mediaType: "image",
      pdfUrl: "assets/docs/detetive-de-pesquisa.pdf",
      link: "assets/docs/detetive-de-pesquisa.pdf",
      linkText: "Consultar relatório em PDF",
      details: {
        desafio: "Investigar e comparar o comportamento dos algoritmos da Google (pesquisa anónima vs navegador com perfil ativo) no mercado de construção sustentável em Light Steel Frame (LSF) em Portugal, identificando os fatores que determinam as primeiras posições orgânicas e o acionamento de anúncios pagos.",
        solucao: "Aplicação da metodologia prática de auditoria \"Detetive de Pesquisa\": análise comparativa dos principais operadores do setor em Portugal (Blink House, Evaplace, Lemcor e Êxodo Construções), avaliação de velocidade no PageSpeed Insights, análise de métricas no Socialinsider e diagnóstico de presença local no Google Perfil de Empresa.",
        estrategia: [
          "Comparativo de pesquisa anónima (IP Porto sem histórico) vs perfil ativo conectado com cookies para medir personalização algorítmica.",
          "Auditoria técnica no PageSpeed Insights: Blink House com menor tempo de bloqueio (40 ms); Êxodo Construções com 100% de acessibilidade e boas práticas, mas maior atrito de bloqueio.",
          "Análise de concorrência orgânica: identificação dos motivos de alternância entre Evaplace e Lemcor e estrangulamentos de usabilidade da Êxodo.",
          "Auditoria de autoridade local e sinais sociais: avaliação do impacto do número de avaliações no Google Perfil de Empresa e presença no Instagram e Facebook.",
          "Mecanismos de pesquisa e leilão: observação de como o Google apresenta resultados através do cruzamento entre localização geográfica por IP, intenção de busca do utilizador (termos como 'chave na mão' e 'preço por m²'), anúncios patrocinados e conteúdos orgânicos."
        ],
        entregaveisTitle: "Entregáveis do projeto",
        entregaveis: "Documento prático de análise com 20 páginas, levantamento visual da página de resultados de pesquisa (SERP), mapeamento de concorrentes diretos no mercado português de construção em LSF e identificação de padrões de pesquisa orgânica e paga.",
        impactoTitle: "Competências desenvolvidas",
        impacto: "Compreensão da dinâmica dos motores de busca no terreno, leitura de sinais de intenção de compra, avaliação do impacto da geolocalização nos resultados locais e capacidade de identificar oportunidades de posicionamento orgânico face à concorrência anunciante."
      }
    },
    {
      id: "havaianas-storytelling",
      title: "Campanha de storytelling | Havaianas",
      category: "estrategia",
      categoryLabel: "Estratégia e storytelling",
      summary: "Exercício prático de planeamento de comunicação e narrativa transmédia de marca realizado na formação de Marketing Digital no IEFP Sintra. Sob o mote 'Para onde eu for, o Brasil me acompanha', a simulação explora a ligação afetiva ao produto como símbolo de identidade cultural e memória da comunidade brasileira residente em Portugal, estruturando a mensagem para redes sociais e suportes audiovisuais.",
      tags: ["Storytelling", "NarrativaTransmédia", "Copywriting", "ComunicaçãoDeMarca", "EstratégiaDeConteúdos", "RedesSociais"],
      metrics: "Simulação Prática | IEFP Sintra",
      coverImage: "assets/images/havaianas-storytelling.png",
      mediaType: "image",
      pdfUrl: "assets/docs/campanha-storytelling-havaianas.pdf",
      link: "assets/docs/campanha-storytelling-havaianas.pdf",
      linkText: "Consultar estratégia em PDF",
      details: {
        desafio: "Trabalhar a ligação emocional da marca com o público emigrante, afastando a comunicação do apelo comercial direto e aproximando-a das vivências e memórias partilhadas da comunidade.",
        solucao: "Desenvolvimento de uma narrativa assente no afeto e na autenticidade: o calçado deixa de ser apenas um produto funcional e passa a representar a bagagem cultural e a sensação de casa que acompanha as pessoas onde quer que vivam.",
        estrategia: [
          "Ideia central: valorização da identidade cultural e da memória afetiva, reforçando a presença da marca nos momentos marcantes da rotina de quem vive no estrangeiro.",
          "Construção da narrativa: progressão cronológica e visual que acompanha diferentes etapas de vida, desde a infância até aos novos desafios no contexto europeu.",
          "Tom de voz e adequação linguística: tom informal, próximo e nostálgico, respeitando as referências culturais e o vocabulário autêntico do público-alvo.",
          "Distribuição multicanal: adaptação da mensagem a formatos visuais e curtos no Instagram e TikTok, complementada por propostas de conteúdos gerados pela própria comunidade e peças em vídeo.",
          "Narrativa transmédia: expansão do conceito por múltiplos suportes com continuidade visual e emocional."
        ],
        entregaveisTitle: "Entregáveis do projeto",
        entregaveis: "Mini-briefing de estratégia, estrutura de narrativa para diferentes canais, matriz de tom de voz e proposta de peças criativas para formatos de imagem e vídeo.",
        impactoTitle: "Competências desenvolvidas",
        impacto: "Capacidade de estruturar propostas de valor através de storytelling, sensibilidade para adaptar a linguagem a contextos culturais específicos e competência na redação de mensagens promocionais sem perder a autenticidade humana."
      }
    },
    {
      id: "depois-do-cafe",
      title: "Landing page | Depois do Café",
      category: "landing-pages",
      categoryLabel: "Landing pages",
      summary: "Primeiro exercício prático de criação de landing pages realizado na formação de Marketing Digital no IEFP Sintra, com foco na aprendizagem dos fundamentos da plataforma Wix. O objetivo pedagógico consistiu em estruturar uma página simples e focada no essencial: definir uma proposta temática em torno da leitura, posicionar estrategicamente o botão de chamada para ação (CTA) e desenhar um formulário de subscrição funcional associado a uma meta formativa de 50 contactos.",
      tags: ["Wix", "LandingPages", "PrimeiroProjeto", "BotãoDeAçãoCTA", "CaptaçãoDeContactos", "HierarquiaVisual"],
      link: "https://carlamoreirask.wixsite.com/depoisdocafe",
      linkText: "Aceder à página no Wix",
      metrics: "Simulação Prática | IEFP Sintra",
      coverImage: "assets/images/depois-do-cafe-mockup.png",
      mediaType: "image",
      details: {
        desafio: "Compreender a lógica de montagem de uma página de captura direta sem dispersão visual, assegurando que o visitante compreende de imediato o tema e encontra com facilidade o ponto de registo.",
        solucao: "Desenvolvimento no Wix de uma estrutura elementar com mensagem curta, recurso ao conceito simulado do guia \"Um convite para ficar\" para justificar o registo de e-mail e colocação evidente do botão de subscrição sem pontos de atrito.",
        estrategia: [
          "Primeiro exercício prático: exploração inicial das funcionalidades de edição, blocos de texto e formulários da plataforma Wix no início do percurso formativo.",
          "Foco no essencial: eliminação de secções desnecessárias para garantir uma navegação linear e leitura imediata em ecrãs móveis e computador.",
          "Posicionamento do botão de ação (CTA): destaque visual do botão de registo, alinhado com a proposta de valor simulada do projeto de leitura.",
          "Definição de meta pedagógica: exercício de fixação de uma meta mensurável (captação de 50 contactos) para orientar o propósito do formulário."
        ],
        entregaveisTitle: "Entregáveis do projeto",
        entregaveis: "Página funcional publicada no Wix com formulário de subscrição ativo, página de confirmação de registo e estudo introdutório da persona leitora.",
        impactoTitle: "Competências desenvolvidas",
        impacto: "Primeiro contacto com ferramentas de criação web sem código, compreensão dos princípios de hierarquia visual e introdução à disposição lógica de elementos de conversão."
      }
    },
    {
      id: "muda-o-jogo",
      title: "Landing page | Muda o Jogo",
      category: "landing-pages",
      categoryLabel: "Landing pages",
      summary: "Exercício prático de conceção de uma landing page no Wix articulada com uma campanha de antecipação (teaser), desenvolvido na formação de Marketing Digital no IEFP Sintra. O trabalho consistiu em simular um ponto de contacto digital para suportes físicos impressos com QR Code, convidando o público a registar-se para receber novidades em primeira mão antes do lançamento final.",
      tags: ["Wix", "LandingPages", "CampanhaTeaser", "QRCode", "DesignResponsivo", "CaptaçãoDeContactos"],
      link: "https://carlamoreirask.wixsite.com/mudaojogo",
      linkText: "Aceder à página no Wix",
      metrics: "Simulação Prática | IEFP Sintra",
      coverImage: "assets/images/muda-o-jogo-poster.png",
      mediaType: "image",
      details: {
        desafio: "Despertar o interesse e a curiosidade das pessoas a partir de materiais impressos na rua, motivando a leitura do código e a visita à página sem revelar de imediato todo o conteúdo da campanha.",
        solucao: "Construção no Wix de uma página simples e direta, com mensagem focada na curiosidade, contraste visual nítido e um formulário de recolha de contactos rápido para reduzir barreiras à subscrição.",
        estrategia: [
          "Mensagem de antecipação: redação de títulos curtos e diretos que convidam à descoberta, mantendo o suspense sobre a mensagem final da ação.",
          "Transição do físico para o digital: encaminhamento dos utilizadores a partir de cartazes e suportes físicos com QR Code diretamente para a página de destino.",
          "Formulário simplificado: estrutura com poucos campos de preenchimento para assegurar uma conversão ágil no telemóvel.",
          "Leitura em dispositivos móveis: adaptação rigorosa da página para ecrãs de smartphone, assegurando que o botão de ação fica visível sem necessidade de deslocamento excessivo."
        ],
        entregaveisTitle: "Entregáveis do projeto",
        entregaveis: "Página de teaser ativa no Wix, proposta visual de suporte impresso com QR Code integrado, formulário de registo e ecrã de confirmação de inscrição.",
        impactoTitle: "Competências desenvolvidas",
        impacto: "Estruturação de mecânicas simples de tráfego entre o meio físico e o digital, aplicação de regras de concisão na escrita para web e otimização da navegação mobile em plataformas de criação rápida."
      }
    },
    {
      id: "imob-vr",
      title: "Imob VR | Vídeo promocional PropTech",
      category: "multimedia",
      categoryLabel: "Multimédia",
      summary: "Exercício prático de comunicação multimédia realizado no âmbito da formação de Marketing Digital no IEFP Sintra, centrado numa simulação promocional de soluções digitais para o setor imobiliário. O trabalho compreendeu a redação de um guião comercial, a seleção de recursos visuais e a edição completa de vídeo no CapCut, demonstrando as vantagens das visitas virtuais na apresentação de imóveis.",
      tags: ["CapCut", "EdiçãoDeVídeo", "VídeoMarketing", "RedesSociais", "SetorImobiliário", "MarketingDigital"],
      metrics: "Simulação Prática | IEFP Sintra",
      coverImage: "assets/images/imob-vr-poster.jpg",
      videoUrl: "assets/videos/imob-vr.mp4",
      mediaType: "video",
      details: {
        desafio: "Explicar de forma rápida e apelativa como as visitas virtuais e maquetas 3D facilitam a tomada de decisão de potenciais compradores, sem recorrer a terminologia técnica complexa.",
        solucao: "Produção de um vídeo promocional curto e dinâmico no CapCut, combinando narração orientada aos benefícios do cliente, ritmo visual constante, cortes sincronizados e legendagem para consumo em redes sociais.",
        estrategia: [
          "Guião estruturado: foco nas vantagens práticas para agências e compradores, nomeadamente a poupança de tempo nas visitas presenciais e a visualização detalhada do espaço.",
          "Edição e ritmo no CapCut: montagem com cortes diretos, sincronização de áudio e aplicação de legendas para garantir que a mensagem é compreendida mesmo sem som ativo.",
          "Adequação de formatos: preparação do conteúdo em formato vertical para circulação em Reels e Stories do Instagram, mantendo a legibilidade dos elementos no ecrã.",
          "Chamada para ação: mensagem final clara a convidar mediadores e promotores a conhecer a tecnologia aplicada à angariação e venda de imóveis."
        ],
        entregaveisTitle: "Entregáveis do projeto",
        entregaveis: "Vídeo promocional final editado no CapCut, guião de voz e texto de apoio para publicação nas redes sociais.",
        impactoTitle: "Competências desenvolvidas",
        impacto: "Domínio de ferramentas de edição de vídeo em ambiente mobile e desktop, capacidade de síntese de mensagens comerciais para suportes audiovisuais e técnicas de legendagem para plataformas digitais."
      }
    },
    {
      id: "meta-ads-local",
      title: "Primeira campanha Meta Ads | Tráfego pago local",
      category: "trafego",
      categoryLabel: "Tráfego pago",
      summary: "Exercício prático de planeamento e configuração de uma campanha de notoriedade no Gestor de Anúncios da Meta, desenvolvido no âmbito da formação de Marketing Digital no IEFP Sintra. O trabalho compreendeu a definição simulada de audiências locais na Figueira da Foz (faixa etária dos 24 aos 50 anos), a aplicação de criativos dinâmicos com múltiplos textos e imagens e a validação técnica da estrutura da campanha com pontuação de 91 pontos.",
      tags: ["MetaAds", "TráfegoPago", "GestorDeAnúncios", "CriativoDinâmico", "MarketingLocal", "AnáliseDeMétricas"],
      metrics: "Simulação Prática | IEFP Sintra",
      coverImage: "assets/images/meta-ads-creative.png",
      mediaType: "image",
      pdfUrl: "assets/docs/campanha-meta-ads.pdf",
      link: "assets/docs/campanha-meta-ads.pdf",
      linkText: "Consultar documentação em PDF",
      details: {
        desafio: "Configurar uma campanha técnica de topo de funil (ToFU) com orçamento controlado para a marca TemConta Marketing, assegurando que os anúncios alcançam decisores e proprietários de pequenas empresas no concelho da Figueira da Foz sem dispersão orçamental.",
        solucao: "Estruturação completa no Meta Ads Manager com objetivo de reconhecimento e meta ThruPlay, delimitação territorial na Figueira da Foz, criativo dinâmico multivariado com vídeo vertical (9:16) de 25 segundos, 5 variações de texto principal e validação técnica de 91 pontos pela plataforma.",
        estrategia: [
          "Objetivo e meta de desempenho: configuração de reconhecimento de marca com otimização focada em visualizações ThruPlay (retenção de pelo menos 15 segundos do vídeo promocional).",
          "Gestão orçamental e duração: orçamento diário de 10,00 € ao longo de 14 dias contínuos (investimento total de 140,00 €) para permitir a superação da fase de aprendizagem algorítmica da Meta.",
          "Segmentação e conformidade legal: público-alvo dos 24 aos 50 anos circunscrito à Figueira da Foz, filtrado por comportamento para «Proprietários de pequenas empresas» e com cumprimento das diretrizes de transparência da UE.",
          "Distribuição Advantage+: posicionamentos automáticos em toda a família de aplicações Meta (Feed, Stories, Reels, Separador Explorar e Messenger) para máxima eficiência de custos por impressão (CPM).",
          "Criativo dinâmico multivariado: carregamento de vídeo vertical nativo (1080 x 1920 px) articulado com 5 variações estratégicas de texto principal para testes simultâneos de mensagem.",
          "Rastreamento e pontuação: configuração de parâmetros de URL e medição analítica, obtendo uma pontuação de configuração técnica de 91 pontos atribuída pela própria ferramenta da Meta."
        ],
        entregaveisTitle: "Entregáveis do projeto",
        entregaveis: "Documentação técnica completa com 8 páginas, parametrização dos 3 níveis de campanha no Meta Ads Manager, matriz com 5 variações de copywriting e registo analítico com classificação de 91 pontos.",
        impactoTitle: "Competências desenvolvidas",
        impacto: "Domínio prático avançado do Meta Ads Manager, estruturação rigorosa de campanhas de tráfego pago local, aplicação de criativos dinâmicos com otimização ThruPlay e conformidade regulamentar europeia em anúncios digitais."
      }
    }
  ],

  skills: {
    blocks: [
      {
        id: "campanhas-posicionamento",
        title: "1. Campanhas e posicionamento",
        subtitle: "Tráfego pago, pesquisa e métricas",
        icon: "trending-up",
        color: "terracotta",
        footerText: "Análise e posicionamento",
        skills: [
          { name: "Meta Ads", desc: "Criação e gestão direta de anúncios, campanhas locais, criativo dinâmico e acompanhamento de posicionamentos." },
          { name: "Google Ads", desc: "Campanhas na rede de pesquisa, seleção de palavras-chave com intenção comercial e acompanhamento de CPC e cliques." },
          { name: "Otimização para motores de busca (SEO)", desc: "Pesquisa de tendências e termos de pesquisa, estruturação de artigos e presença local no Google Perfil de Empresa." },
          { name: "Métricas e análise de campanhas", desc: "Leitura de indicadores essenciais como alcance, impressões, cliques, CTR, custo por contacto e conversões." },
          { name: "Web Analytics", desc: "Noções práticas de Google Analytics 4 para análise de origens de tráfego e comportamento do utilizador." },
          { name: "E-mail marketing e automação", desc: "Estruturação de sequências de mensagens, formulários de subscrição e partilha periódica de conteúdos." }
        ]
      },
      {
        id: "conteudos-suportes-visuais",
        title: "2. Conteúdos e suportes visuais",
        subtitle: "Vídeo, design gráfico e landing pages",
        icon: "palette",
        color: "terracotta",
        footerText: "Clareza visual e comunicação",
        skills: [
          { name: "CapCut (edição de vídeo)", desc: "Edição ágil para redes sociais, sincronização de áudio, cortes de ritmo e aplicação de legendas em formatos Reels e Stories." },
          { name: "Adobe Photoshop", desc: "Tratamento de fotografias, recorte de imagens, correção cromática e preparação de peças visuais para web." },
          { name: "Canva", desc: "Criação de publicações para redes sociais, carrosséis informativos, infografias e apresentações de projeto." },
          { name: "Wix", desc: "Conceção de landing pages funcionais com formulários de captura integrados e adaptação para dispositivos móveis." },
          { name: "Design thinking", desc: "Métodos de exploração de problemas, ideação focada nas necessidades do utilizador e prototipagem de soluções." },
          { name: "UX Metrics 2.0", desc: "Princípios de análise da experiência de navegação e identificação de pontos de atrito em páginas web." }
        ]
      },
      {
        id: "processos-articulacao-tecnica",
        title: "3. Processos e articulação técnica",
        subtitle: "Sistemas, IA e rotina operacional",
        icon: "cpu",
        color: "amber",
        footerText: "Organização e articulação técnica",
        skills: [
          { name: "Operação e manutenção de CRM", desc: "Gestão diária da plataforma, organização de contactos e reporte e acompanhamento de falhas técnicas com os programadores." },
          { name: "Implementação e monitorização de IA", desc: "Levantamento de requisitos funcionais para atendimento inicial com IA e acompanhamento pós-lançamento para correções." },
          { name: "Ferramentas de IA generativa", desc: "Utilização criteriosa de modelos de linguagem e ferramentas visuais como suporte à pesquisa, ideação e redação." },
          { name: "Gestão de processos e rigor administrativo", desc: "Mais de 11 anos de experiência em rotinas comerciais e administrativas, organização documental e método de trabalho." },
          { name: "Trabalho autónomo e remoto", desc: "Capacidade de autogestão de tarefas, cumprimento de prazos e comunicação clara em equipas distribuídas." }
        ]
      }
    ]
  }
};
