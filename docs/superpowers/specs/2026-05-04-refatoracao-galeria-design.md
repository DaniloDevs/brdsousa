# Design Spec: Refatoração da Galeria de Fotografia

**Data:** 2026-05-04
**Tópico:** Refatoração da página de Galeria para um layout Masonry de categorias e subpáginas organizadas.

## 1. Visão Geral
Transformar a atual página de galeria (baseada em carrossel) em uma experiência visual dinâmica e intuitiva, utilizando um layout de grade Masonry para as categorias e grades uniformes para as coleções individuais.

## 2. Arquitetura e Estrutura

### 2.1 Página Principal da Galeria (`/galeria`)
- **Layout:** Masonry Grid (estilo Pinterest).
- **Comportamento:** Colunas dinâmicas (ex: 1 em mobile, 2 em tablet, 3 em desktop).
- **Componente:** `CategoryCard`.
- **Informações por Card:**
    - **Imagem de Capa:** Foto representativa da categoria com proporções variadas.
    - **Título:** Sempre visível, posicionado na base do card com gradiente de legibilidade.
    - **Hover Details:** Subtítulo, Descrição curta e Contagem de fotos (ex: "48 fotos").
- **Navegação:** Clique no card redireciona para `/galeria/[slug]`.

### 2.2 Páginas de Categoria (`/galeria/[slug]`)
- **Layout:** Grid Uniforme (proporção 1:1 ou 3:4 fixa).
- **Componente:** `PhotoCard`.
- **Recursos:**
    - Botão "Voltar para Galeria" no topo.
    - Header com título e descrição da categoria.
    - Lightbox para visualização ampliada das fotos.

## 3. Experiência do Usuário (UX) e Interações

### 3.1 Feed de Categorias
- **Entrada:** Animação de "fade-in" e "slide-up" suave ao carregar os itens do Masonry.
- **Interação (Hover):**
    - Zoom suave na imagem (`scale-105`).
    - Aparecimento de detalhes (descrição) com opacidade e movimento vertical.

### 3.2 Transições
- Transições suaves entre a galeria principal e as coleções para manter a continuidade visual.

## 4. Implementação Técnica

### 4.1 Tecnologias
- **Next.js (App Router)**
- **Tailwind CSS** para o layout Masonry (usando `columns-sm` ou `grid-rows-[masonry]`).
- **Lucide React** para ícones de navegação.
- **Framer Motion** (opcional, se já estiver no projeto) para animações de hover e entrada.

### 4.2 Organização de Dados
- Centralizar as definições de categorias em um arquivo de configuração ou constante para facilitar a expansão de 6 para 12 categorias.

## 5. Critérios de Sucesso
- Navegação fluida entre categorias.
- Visual equilibrado e "vivo" no grid Masonry.
- Facilidade de adicionar novas coleções sem quebrar o layout.
- Responsividade impecável em todos os dispositivos.
