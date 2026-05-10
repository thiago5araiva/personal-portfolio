# Product

## Register

brand

## Users

Recrutadores técnicos, engineering managers e leads avaliando Thiago Saraiva para vagas seniors. Chegam vindos de LinkedIn, GitHub ou indicação. Lêem em desktop em horário comercial, com pouco tempo, comparando candidatos lado a lado. Querem decidir em menos de 2 minutos se vale ler um artigo inteiro e marcar uma conversa.

A saída desejada da visita: ler ao menos um artigo até o fim e abrir um canal de contato (LinkedIn, e-mail).

## Product Purpose

Portfólio que funciona como prova de senioridade técnica e clareza de pensamento, usando a própria escrita do Thiago como evidência. A home não é vitrine de projetos: é a porta de um corpo de texto. O design existe para enquadrar o conteúdo com autoridade editorial, não para entreter.

Sucesso = visitante decide, em segundos, que esse engenheiro pensa de forma estruturada o suficiente para ser entrevistado, e abre um artigo.

A home tem registro **brand** (a identidade visual carrega peso). As páginas de artigo `/content/[slug]` têm registro **product** (otimizadas para leitura prolongada). Mudanças nas duas precisam respeitar essa divisão: a home pode ser bold, a leitura precisa ser silenciosa.

## Brand Personality

Editorial, técnico, confiante. Voz de quem domina o assunto sem precisar provar a cada parágrafo. Tom mais próximo de uma revista técnica longa-leitura (LRB, Increment antigo, Pitchfork em texto editorial) que de blog pessoal de dev. Confiança vem do peso tipográfico e da hierarquia, não de badges, skills sections ou copy bombástica. Quietude com massa.

## Anti-references

- **Medium / Substack / blog genérico**: feed cinza, avatar redondo no header de cada post, tabs Recommended/Following, sidebar "What Read Today", cards iguais com thumbnail à direita, "X min read" com ponto separador. É o ponto de partida atual e é exatamente o que precisamos sair.
- **Portfólio dev clichê**: hero "Hi, I'm Thiago" com emoji, grid de projetos com cards idênticos, seção Skills com logos de tecnologias.
- **SaaS-cream Vercel boilerplate**: hero centralizado, CTA pill, gradiente roxo→azul, ilustração Figma stock.

## Design Principles

1. **Show, don't tell.** A própria execução do site é a evidência de senioridade. Nada de "skills" ou "stack" listadas; o código, a tipografia e a hierarquia falam.
2. **Tipografia carrega a estrutura.** Não cards. A hierarquia é construída por escala, peso e ritmo de espaço, não por containers retangulares.
3. **Cor com propósito raro.** O Caesar burgundy (`#F5332C`) é evento, não decoração. Preto e branco fazem 90%+ do trabalho; burgundy aparece para sinalizar algo carregado (link ativo, peça em destaque, datas atuais), nunca como wash de fundo nem como gradiente.
4. **Ler é o único call-to-action.** Cada elemento da home empurra para um artigo. Não há ego no layout; o ego está no que está escrito.
5. **Confiança é quieta.** Negative space é estrutural, não decorativo. Movimentos lentos, sem bounce. Se algo grita, removemos antes de publicar.

## Accessibility & Inclusion

WCAG AA como padrão (contraste de texto ≥4.5:1, foco visível, navegação completa por teclado, respeito a `prefers-reduced-motion`). Sem requisitos formais adicionais. Cuidado especial: como o design depende de tipografia editorial em escalas grandes, garantir que reduções de motion não quebrem hierarquia visual.
