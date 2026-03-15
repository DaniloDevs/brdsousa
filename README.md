# Breno da Silva Sousa - Portfólio de Fotografia e Audiovisual

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)

Um portfólio moderno e elegante desenvolvido para mostrar o trabalho profissional de fotografia e produção audiovisual de **Breno da Silva Sousa**, com foco especial em eventos e fotografia automotiva.

## 🌟 Principais Recursos

- **Design Premium e Responsivo**: Criado com Tailwind CSS v4 e Shadcn UI, apresentando temas escuros elegantes, gradientes e uma interface construída para destacar o apelo visual das fotografias.
- **Navegação Dinâmica**: Sidebar expansível (menu lateral) para fácil navegação entre as seções.
- **Divisão Categórica do Portfólio**:
  - 🚗 Fotografia Automotiva
  - 📸 Cobertura de Eventos
- **Integração com WhatsApp**: Botão de formulário/contato direto ("Solicitar Orçamento") configurado para iniciar o contato de forma rápida.
- **Otimizado e Rápido**: Criado em cima das mais novas tecnologias front-end garantindo fluidez e velocidade de carregamento de imagem.

## 💻 Tecnologias Utilizadas

- [Next.js (v16.1)](https://nextjs.org/) - Framework React estruturado no App Router
- [React (v19)](https://react.dev/) - Biblioteca base para construção de interfaces UI
- [Tailwind CSS (v4)](https://tailwindcss.com/) - Estilização utilitária de ponta
- [Shadcn UI](https://ui.shadcn.com/) - Componentes acessíveis e customizáveis baseados em Radix UI
- [Lucide React](https://lucide.dev/) - Ícones elegantes e consistentes
- [Biome](https://biomejs.dev/) - Ferramenta que substitui ESLint/Prettier (Linter e formatador de código ultrarrápido)
- [pnpm](https://pnpm.io/) - Gerenciador de dependências rápido e eficiente

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 20+) instalado e o [pnpm](https://pnpm.io/installation) configurado na sua máquina.

### Passos

1. **Clone o repositório** (se aplicável):
   ```bash
   git clone <url-do-repositorio>
   cd portifolio-breno
   ```

2. **Instale as dependências**:
   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   pnpm dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado iterativo da aplicação local.


## 📁 Estrutura do Projeto

Abaixo, uma visão geral prática das pastas do projeto (Next.js App Router):

- `src/app`: Definição de rotas, páginas e layouts principais.
  - `(main)`: Grupo de rotas central envolvendo o contexto da Sidebar do portfólio.
    - `(home)`: Página inicial com a apresentação das "Histórias Visuais" e link de contato.
    - `portifolio`: Páginas dedicadas aos nichos profissionais (automotivo, eventos).
    - `sobre`: Detalhamento sobre a história e experiência profissional da fotógrafa/fotógrafo.
- `src/components`: Componentes desacoplados da lógica das páginas (ex: `sidebar`, `about`, `ui`).
- `src/assets`: Hospeda imagens estáticas locais que foram usadas na Home.
- `src/hooks`: Funções utilitárias baseadas em componentes (ex: `use-mobile`).
- `src/lib`: Utilitários gerais para manipulação de estilos e funções recorrentes do Shadcn.

## 📱 Contato

Para propostas, orçamentos ou parcerias comerciais, não hesite em utilizar os atalhos de contato para o WhatsApp na plataforma principal ou explore a aba **Sobre**.
