# Design

Visual system for the portfolio. Captures color, typography, spacing, motion, and component patterns. Read together with `PRODUCT.md`, which defines who this is for and why.

## Aesthetic stance

Editorial. Tipografia carrega o peso, cor é evento raro, cards são proibidos como reflexo. A home (registro brand) pode ser bold; páginas de leitura (registro product) são silenciosas. Ambas compartilham o mesmo sistema de tokens; a diferença está na intensidade de uso.

Aesthetic lane: **grotesque-editorial**, deliberadamente fora do trap "display-serif italic + Klim grid" que saturou o brand register em 2025–2026. Bricolage Grotesque substitui o reflexo Fraunces.

## Theme

Cena física: recrutador técnico em desktop iluminado de dia, comparando candidatos lado a lado em <2min. Decisão: **light theme**. Papel quente, tinta escura quente. Sem dark mode.

## Color

Strategy: **Restrained, com burgundy como evento.** Tinted neutrals fazem 90%+ do trabalho; o burgundy aparece em ≤5 momentos por página.

### Tokens

| Token | Valor (hex) | OKLCH aproximado | Uso |
|---|---|---|---|
| `caesar-black` | `#14100e` | `oklch(0.18 0.012 25)` | Texto principal, bordas escuras |
| `caesar-white` | `#fbfaf6` | `oklch(0.985 0.003 50)` | Fundo de página |
| `caesar-burgundy` | `#F5332C` | `oklch(0.6 0.22 25)` | Accent, raro |

Pretos e brancos puros são proibidos. Os neutros estão tintados em direção ao hue do burgundy (chroma 0.005–0.012), removendo o "LCD blue" do `#000` puro.

### Burgundy budget

Lugares onde burgundy pode aparecer:
- Número da edição em `Issue №` (intro + cada item da home)
- Hover de título de post
- Arrow `READ →` e linha de progresso em hover
- Label "The author" no Author column
- `::selection` global
- Link ativo de navegação
- Drop cap eventual em peça destacada

Lugares onde burgundy é proibido:
- Backgrounds (sem wash)
- Side-stripe de cards
- Gradientes (banidos por sistema)
- Tag pills decorativos
- Bordas decorativas espessas

### Opacidade do preto

Use `caesar-black/X` consistentemente:
- `/100` (sólido) — títulos display, números de edição em hover
- `/80–75` — corpo principal
- `/70` — lede, parágrafos secundários
- `/55` — mono labels secundários, datas
- `/45–40` — labels terciários (Currently, Index, Most read)
- `/30` — divisores em hover
- `/15` — bordas estruturais
- `/10` — bordas mais leves, fundos de bloco

## Typography

### Families

```
--font-display  →  Bricolage Grotesque (Google Fonts, variable)
--font-sans     →  Geist Sans (Google Fonts, variable)
--font-mono     →  JetBrains Mono (Google Fonts, variable)
```

Carregadas via `next/font/google` em `src/app/layout.tsx`. Variáveis CSS expostas via Tailwind como `font-display`, `font-sans`, `font-mono`.

`font-title` e `font-text` mapeiam para `font-display` e `font-sans` respectivamente (compatibilidade com código antigo).

### Reflex-reject avoided

Bricolage Grotesque, Geist e JetBrains Mono não estão na lista de fontes saturadas do `brand.md` (Fraunces, Inter, IBM Plex, DM Sans, Cormorant, Newsreader, etc.). O par grotesque-display + sans-técnico evita simultaneamente o trap "Editorial-typographic" (display serif italic) e o trap "SaaS-Inter".

### Scale (CSS custom properties em `global.css`)

```css
--type-display: clamp(2.75rem, 5vw + 1rem, 5.5rem);   /* hero / intro */
--type-h2:      clamp(1.75rem, 2.5vw + 0.75rem, 3rem); /* títulos de post */
--type-h3:      clamp(1.25rem, 1vw + 1rem, 1.625rem);
--type-body:    clamp(1rem, 0.25vw + 0.95rem, 1.125rem);
--type-meta:    0.8125rem;                              /* mono labels */
```

Razão entre passos ≈1.4×. Acima do mínimo 1.25× exigido pelas leis compartilhadas.

### Voice por uso

- **Display title (intro, h1 de artigo)**: Bricolage Grotesque, weight 500, `tracking-tightest` (-0.03em), line-height 0.95–1.05.
- **H2 (título de post no feed, seção de artigo)**: Bricolage Grotesque, weight 500, `tracking-editorial` (-0.022em), line-height 1.05.
- **Body (lede, parágrafos)**: Geist Sans, weight 400, line-height `relaxed` (1.625), max-width 60–70ch.
- **Meta (data, edition, tag, "READ →")**: JetBrains Mono, uppercase, `tracking-meta` (0.22em), 0.75–0.8125rem.

### Measure caps

Body fica entre 60ch (lede) e 70ch (corpo de artigo). Mono labels não têm cap (são curtos).

## Spacing

### Tokens

```css
--space-section: clamp(4rem, 8vw, 7rem);    /* entre grandes blocos */
--space-block:   clamp(1.5rem, 3vw, 2.5rem); /* entre título e corpo */
--space-tight:   clamp(0.75rem, 1vw, 1rem);  /* dentro de grupo */
```

### Princípio

Ritmo, não monotonia. Agrupamentos coesos (título + lede) usam `space-tight`; transições entre seções usam `space-section`. Padding uniforme em tudo é proibido.

Containers verticais entre items de feed usam `clamp(3rem, 6vw, 5.5rem)`. Bordas de seção horizontais: `border-caesar-black/15`.

## Layout

### Grid editorial

12 colunas, `gap-x-4`, em desktop. Items de feed usam offsets assimétricos:
- Edition number: cols 1–2
- Date: cols 3–12 com `text-right`
- Title: cols 2–10 (deslocado da margem absoluta)
- Lede: cols 3–9 (mais recuado)
- Meta line: cols 1–7 (puxada para a margem absoluta)

Em mobile (sem `md:`), tudo single-column 100%.

### Two-column home

Feed (`minmax(0,1fr)`) + author column (`clamp(13rem,18vw,17rem)`), separados por `border-l border-caesar-black/15` e `pl-[clamp(1.5rem,2.5vw,3rem)]`. Em mobile, a author column desce para baixo do feed (`lg:hidden` + section após o grid).

## Motion

### Easing

```ts
'out-quart': 'cubic-bezier(0.22, 1, 0.36, 1)',
'out-expo':  'cubic-bezier(0.16, 1, 0.3, 1)',
```

Apenas exponential ease-out. Sem bounce, sem elastic, sem `ease-in` para entradas.

### Durations

- 300ms — pequenos hovers (cor)
- 500ms — transições estruturais (largura de underline, sublinhado animado)

### Reduced motion

`global.css` aplica:

```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
```

### Não animar

- Propriedades de layout (`width`/`height` de container, exceto pequenos detalhes)
- `transform: scale()` em texto
- Cores de fundo amplas

OK animar:
- Cor de texto (300–500ms ease-out-quart)
- Largura de pequenos elementos lineares (sublinhado animado, traços)
- Transformações em elementos pequenos (setas, ícones)

## Components

### Editorial item (feed)

Estrutura padrão de um item no feed da home:

```
№ XXX (mono burgundy)              MAY 02, 2026 (mono /55)
---------------------------------------------------------
        Display title in 2-3 lines, wide tracking-editorial
                           (col-start-2 col-span-9)
        Lede paragraph, body sans, max-width 60ch
                           (col-start-3 col-span-7)
TAG · X MIN ─── READ →
(col-start-1 col-span-7, mono uppercase tracked)
```

Hover state: título → burgundy, linha do meta cresce de 8 para 16 e vira burgundy, "READ →" → burgundy.

### Editorial intro (home)

```
Issue № XXX (mono burgundy)              MONTH YEAR (mono /55)

Big display title
in 2-3 broken lines.
                              Byline body sans, /70, offset right.
─────────────────────────────────────────────────────────────────
```

### Author column (sidebar)

Stack vertical com `gap-10`. Cada bloco tem: mono label (uppercase, /45) + conteúdo. Blocos: "The author" (/burgundy), "Currently", "Most read" (numerada), "Index" (links).

Links com sublinhado animado: traço de 12px → 28px em hover, vira burgundy.

### Mono label

Padrão para todas as labels secundárias:

```
font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/45 mb-3
```

Variação primária (mais forte): `text-caesar-burgundy`, `text-[0.75rem]`.

## Bans (para este projeto)

Em adição aos shared bans do skill:

- **Avatar redondo** em listings ou headers de post.
- **Tag pills cinzas** no formato `bg-X/10 rounded-full`.
- **Bookmark icons** em listings.
- **Tabs Recommended/Following** ou variantes.
- **Sidebars do tipo "What X Today"** ou "Topics".
- **Ícones decorativos coloridos** em headers (estilo SaaS: ícone azul + título + descrição).
- **Border-left/right colorido** como accent.
- **Imagens thumbnail uniformes** à direita de items de listing.
- **Hero centralizado com CTA pill** em qualquer página.
- **"Hi, I'm Thiago"** com emoji.

## File map

| Arquivo | Responsabilidade |
|---|---|
| `tailwind.config.ts` | Tokens de cor, fontFamily, letterSpacing, transitionTimingFunction |
| `src/app/global.css` | CSS vars de tipografia + spacing, base styles, reduced-motion, ::selection |
| `src/app/layout.tsx` | Carregamento de Bricolage + Geist + JetBrains via next/font/google |
| `src/app/(portfolio)/home/components/Intro.tsx` | Editorial intro pattern |
| `src/app/(portfolio)/home/components/Content.tsx` | Editorial item pattern |
| `src/app/(portfolio)/home/components/Featured.tsx` | Author column pattern |

## When to extend this file

Adicione ao DESIGN.md:
- Novos tokens (cor, type, spacing) que se tornem reutilizáveis em ≥2 lugares.
- Padrões de componente que apareçam em ≥2 páginas.
- Decisões de motion/animation novas.

Não adicione:
- Variações estilísticas one-off (ficam locais ao componente).
- Tokens legados (`brand-primary`, `primary-default`, etc., que existem em `tailwind.config.ts` mas não são parte do sistema editorial).
