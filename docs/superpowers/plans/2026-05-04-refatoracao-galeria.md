# Refatoração da Galeria de Fotografia Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refatorar a galeria para um layout Masonry de categorias e páginas internas dinâmicas.

**Architecture:** Centralização dos dados das categorias em um arquivo compartilhado, criação de componentes reutilizáveis para os cards e migração de rotas estáticas para uma rota dinâmica `[slug]`.

**Tech Stack:** Next.js (App Router), Tailwind CSS, Lucide React.

---

### Task 1: Definição de Tipos e Dados Centralizados

**Files:**
- Create: `src/types/gallery.ts`
- Create: `src/lib/gallery-data.ts`

- [ ] **Step 1: Criar definições de tipos**
```typescript
export interface Category {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  photoCount: number;
}

export interface Photo {
  id: string;
  url: string;
  alt: string;
}
```

- [ ] **Step 2: Centralizar dados das categorias**
(Migrar os dados de `src/app/(main)/galeria/page.tsx` para este novo arquivo, adicionando slugs e garantindo que as imagens existam).

- [ ] **Step 3: Commit**
```bash
git add src/types/gallery.ts src/lib/gallery-data.ts
git commit -m "feat: add gallery types and data centralizer"
```

### Task 2: Componente CategoryCard (Masonry Item)

**Files:**
- Create: `src/components/gallery/category-card.tsx`

- [ ] **Step 1: Implementar o componente de Card com efeitos de hover**
(Usar Tailwind para o zoom da imagem e o aparecimento suave dos detalhes).

- [ ] **Step 2: Commit**
```bash
git add src/components/gallery/category-card.tsx
git commit -m "feat: implement CategoryCard component"
```

### Task 3: Refatoração da Galeria Principal

**Files:**
- Modify: `src/app/(main)/galeria/page.tsx`

- [ ] **Step 1: Implementar o layout Masonry**
(Usar `columns-1 sm:columns-2 lg:columns-3 gap-4` do Tailwind para o efeito dinâmico).

- [ ] **Step 2: Mapear as categorias para o novo grid**

- [ ] **Step 3: Commit**
```bash
git add src/app/(main)/galeria/page.tsx
git commit -m "feat: refactor main gallery page to masonry layout"
```

### Task 4: Rota Dinâmica para Coleções

**Files:**
- Create: `src/app/(main)/galeria/[slug]/page.tsx`

- [ ] **Step 1: Implementar a página dinâmica de categoria**
(Incluir Header, Grade Uniforme de fotos e botão de voltar).

- [ ] **Step 2: Commit**
```bash
git add src/app/(main)/galeria/[slug]/page.tsx
git commit -m "feat: add dynamic category page [slug]"
```

### Task 5: Limpeza e Migração

**Files:**
- Delete: `src/app/(main)/galeria/automotivo/page.tsx`
- Delete: `src/app/(main)/galeria/eventos/page.tsx`
- Delete: `src/app/(main)/galeria/paisagem/page.tsx`
- Delete: `src/app/(main)/galeria/retratos/page.tsx`

- [ ] **Step 1: Remover páginas estáticas redundantes**

- [ ] **Step 2: Verificar links e rotas**

- [ ] **Step 3: Commit**
```bash
git add .
git commit -m "cleanup: remove redundant static category pages"
```
