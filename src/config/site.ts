/**
 * ============================================================================
 * CONFIGURAÇÃO CENTRAL DA LANDING PAGE — PARA CRIAR UMA CÓPIA NOVA:
 * ============================================================================
 * Para criar uma cópia nova, duplique o projeto no painel e altere apenas este
 * arquivo (e as metatags equivalentes no index.html).
 *
 * Todas as partes que variam entre cópias (Hero, links, nomes, parceiro e fotos)
 * estão centralizadas aqui de forma tipada.
 *
 * Checklist ao duplicar o projeto:
 * 1. Altere o nome do parceiro/projeto em `partner` e `brand`.
 * 2. Atualize o `whatsappGroup` com o link do grupo do novo parceiro.
 * 3. Atualize o código `ref` do cadastro Mimix (ex.: "equipedesucesso").
 * 4. (Opcional) Troque a foto do Hero (`heroImage`) e a foto de perfil (`avatarImage`).
 * 5. Abra `index.html` e replique o <title> e as metatags <meta property="og:...">
 *    e <meta name="twitter:..."> com os mesmos textos definidos em `meta` abaixo.
 * ============================================================================
 */

import heroCamilaImg from '@/assets/camila-e4482.png'
import avatarCamilaImg from '@/assets/imagemgerada1791989791946-f5d05.png'

export interface SiteConfig {
  /** Dados da marca e do parceiro titular desta página */
  partner: {
    /** Nome completo do parceiro (ex.: "Camila Silva") */
    name: string
    /** Nome da marca / iniciativa exibida no topo e no rodapé (ex.: "Camila Silva Renda Extra") */
    brandName: string
    /** Primeira linha do logotipo (ex.: "CAMILA SILVA") */
    logoLine1: string
    /** Segunda linha em destaque dourado do logotipo (ex.: "RENDA EXTRA") */
    logoLine2: string
    /** Monograma / iniciais para fallback caso a foto não carregue (ex.: "CS") */
    monogramFallback: string
    /** Texto curto de parceria (ex.: "Camila Silva / Mimix e Hub") */
    partnershipLabel: string
    /** Texto da badge do Hero (ex.: "Iniciativa Camila Silva / Mimix e Hub") */
    heroBadgeLabel: string
    /** Texto de crédito no rodapé */
    footerCredit: string
    /** Texto de indicação do bloco de indicação/cadastro */
    referralCredit: string
  }

  /** Imagens principais que costumam variar por cópia */
  images: {
    /**
     * Imagem principal do Hero (foto identificada como camila com overlay sci-fi neon).
     * Pode ser um import de imagem local (ex.: de src/assets) ou uma URL pública.
     */
    heroImage: string
    /** Texto alternativo da imagem do Hero */
    heroImageAlt: string
    /**
     * Foto de retrato/avatar do parceiro exibida no cabeçalho circular (primeira foto).
     */
    avatarImage: string
    /** Texto alternativo do avatar */
    avatarImageAlt: string
    /** Caminho da imagem de compartilhamento Open Graph (em public/) */
    ogImage: string
    /** Caminho do favicon (em public/) */
    favicon: string
  }

  /** Links de conversão da landing page */
  links: {
    /**
     * Link do grupo oficial do WhatsApp do parceiro.
     * Usado em TODOS os botões de WhatsApp da página (Hero, cabeçalho, botão flutuante, seções, rodapé).
     */
    whatsappGroup: string

    /**
     * Cadastro Mimix com referência do parceiro:
     * https://mimix-ai.xyz/register?ref=camillatreinandoia
     */
    mimix: {
      baseUrl: string
      ref: string
      get registerUrl(): string
    }

    /**
     * Link da plataforma parceira Hub:
     * https://ai.hub.xyz/r/CAMIIA
     */
    hub: {
      registerUrl: string
    }

    /** Links de matérias jornalísticas de comprovação (CNN, TecMundo, Estadão, etc.) */
    news: {
      cnn: string
      tecmundo: string
      estadao: string
      diarioNordeste: string
      mit: string
      businessInsider: string
      yahoo: string
      gizmodo: string
    }
  }

  /** Metatags para SEO, redes sociais e compartilhamento via WhatsApp/Facebook/Twitter */
  meta: {
    /** Título da aba do navegador (<title>) */
    title: string
    /** Meta description para motores de busca */
    description: string
    /** Open Graph Title (WhatsApp / Facebook) */
    ogTitle: string
    /** Open Graph Description */
    ogDescription: string
    /** Open Graph Image Alt */
    ogImageAlt: string
    /** Twitter Card Title */
    twitterTitle: string
    /** Twitter Card Description */
    twitterDescription: string
    /** Palavras-chave */
    keywords: string
    /** URL canônica de produção desta cópia */
    canonicalUrl: string
  }
}

export const siteConfig: SiteConfig = {
  partner: {
    name: 'Camila Silva',
    brandName: 'Camila Silva Renda Extra',
    logoLine1: 'CAMILA SILVA',
    logoLine2: 'RENDA EXTRA',
    monogramFallback: 'CS',
    partnershipLabel: 'Camila Silva / Mimix e Hub',
    heroBadgeLabel: 'Camila Silva / Mimix e Hub',
    footerCredit: 'Página criada por Camila Silva Renda Extra',
    referralCredit:
      'Cadastro gratuito pelas plataformas parceiras Mimix e Hub — indicação Camila Silva Renda Extra · Dúvidas? O suporte gratuito te ajuda.',
  },

  images: {
    // Imagem Hero: Foto da mulher na pia da cozinha lavando louça com overlay futurista holográfico
    heroImage: heroCamilaImg,
    heroImageAlt:
      'Renda Extra tarefas residenciais e comerciais com Camila Silva — gravação em primeira pessoa e IA física',

    // Foto circular de topo/avatar: Selfie com suporte de celular laranja na cabeça
    avatarImage: avatarCamilaImg,
    avatarImageAlt: 'Camila Silva — Renda Extra',

    // Caminho da imagem de compartilhamento absoluta em public/ (Imagem Hero)
    ogImage: '/og-camila-hero.png',
    favicon: '/favicon.png',
  },

  links: {
    // Link do grupo de WhatsApp — replicado em TODOS os botões
    whatsappGroup: 'https://chat.whatsapp.com/Hs95mOzWY7V47Yfy3w2Xsy?s=cl&p=i&mlu=0&ilr=4&iam=2',

    // Cadastro Mimix com o parâmetro 'ref=camillatreinandoia'
    mimix: {
      baseUrl: 'https://mimix-ai.xyz/register',
      ref: 'camillatreinandoia',
      get registerUrl() {
        return `${this.baseUrl}?ref=${encodeURIComponent(this.ref)}`
      },
    },

    // Link oficial da Hub
    hub: {
      registerUrl: 'https://ai.hub.xyz/r/CAMIIA',
    },

    // Notícias reais de comprovação
    news: {
      cnn: 'https://www.cnnbrasil.com.br/economia/money/tecnologia/como-gravar-tarefas-domesticas-pode-treinar-robos-mordomos-no-futuro/',
      tecmundo:
        'https://www.tecmundo.com.br/ciencia/414223-como-trabalhadores-estao-filmando-empregos-para-treinar-ia-entenda.htm',
      estadao:
        'https://www.estadao.com.br/tecmundo/stem/414223-como-trabalhadores-estao-filmando-empregos-para-treinar-ia-entenda/',
      diarioNordeste:
        'https://diariodonordeste.verdesmares.com.br/negocios/cearenses-ganham-ate-r-4-mil-com-videos-para-treinar-robos-e-ias-entenda-tendencia-e-riscos-1.3790363',
      mit: 'https://www.technologyreview.com/2026/04/01/1134863/humanoid-data-training-gig-economy-2026-breakthrough-technology',
      businessInsider:
        'https://www.businessinsider.com/ai-startups-robotics-pay-film-chores-encord-micro1-scale-2025-10',
      yahoo:
        'https://finance.yahoo.com/technology/ai/articles/figure-launches-gig-platform-humans-174059209.html',
      gizmodo: 'https://gizbr.uol.com.br/treinamento-robos-ia-tarefas',
    },
  },

  meta: {
    title: 'Camila Silva Renda Extra — Camila Silva / Mimix e Hub',
    description:
      'Camila Silva / Mimix e Hub: ganhe uma renda extra gravando tarefas do dia a dia para treinar IA física, tarefas residenciais e comerciais.',
    ogTitle: 'Camila Silva Renda Extra',
    ogDescription:
      'Renda extra gravando tarefas residenciais e comerciais para treinar IA física. Acesse os links oficiais da Mimix e Hub e participe com suporte gratuito no WhatsApp.',
    ogImageAlt:
      'Camila Silva Renda Extra — Atividades e Tarefas Residenciais e Comerciais com Camila Silva',
    twitterTitle: 'Camila Silva Renda Extra',
    twitterDescription:
      'Renda extra gravando tarefas do dia a dia para treinar IA física. Pagamentos via Pix e USDT em parceria com Camila Silva / Mimix e Hub.',
    keywords:
      'Renda Extra, Camila Silva, Mimix, Hub, IA Física, Pix, USDT, Gravação de Tarefas, Tarefas Residenciais e Comerciais',
    canonicalUrl: 'https://revisao-de-landing-page-copy-83dcd.goskip.app',
  },
}
