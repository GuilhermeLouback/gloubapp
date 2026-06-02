<div align="center">

# Guilherme Louback — Portfólio

### Desenvolvedor full-stack · Crio sites e aplicativos

[![Acessar o site](https://img.shields.io/badge/▲_acessar-gloubapp.com-c2f23c?style=for-the-badge&labelColor=0a0b0e)](https://gloubapp.com)

![Next.js](https://img.shields.io/badge/Next.js-15-000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel&logoColor=white)

</div>

---

Site de **apresentação** pessoal com identidade visual **"Build Studio"** — tema escuro, acento verde-limão e estética de engenharia. O destaque é uma seção que **simula, em tempo real, a criação de sites e aplicativos**: o código é "digitado" e vai virando interface, numa moldura de browser e de celular, do código ao preview.

🔗 **No ar:** **[gloubapp.com](https://gloubapp.com)**

## ✨ Destaques

- 🧩 **Simulação ao vivo "código → produto"** — cada linha de código vira um site (browser) e um app (celular), com barra de build.
- 🗂️ Seções: **Hero**, **Estúdio** (a simulação), **Serviços**, **Sobre**, **Stack** e **Contato**.
- 📱 **100% responsivo**, com animações em **CSS + IntersectionObserver** (sem bibliotecas de animação).
- ⚡ **Frontend-only** — conteúdo em dados locais, sem banco de dados: rápido e simples de manter.

## 🛠️ Tecnologias

| Camada | Stack |
| --- | --- |
| Framework | Next.js 15 (App Router) · React 19 |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS 4 |
| Ícones | Tabler Icons |
| Tipografia | Bricolage Grotesque · Hanken Grotesk · JetBrains Mono |
| Deploy | Vercel (CI/CD via GitHub) |

## 🚀 Rodando localmente

> Requer **Node 18+** (testado com Node 22).

```bash
# entre na aplicação
cd frontend

# instale as dependências
npm install

# suba o ambiente de desenvolvimento
npm run dev
```

Abra **http://localhost:3000** no navegador.

## 📦 Build de produção

```bash
cd frontend
npm run build
npm start
```

## 📁 Estrutura

```
gloubapp/
├─ frontend/                    # a aplicação (o site)
│  ├─ src/app/                  # rotas — App Router
│  ├─ src/components/studio/    # seções do site (Hero, BuildSimulation, ...)
│  ├─ src/data/portfolio.ts     # conteúdo: serviços + stack de tecnologias
│  └─ public/                   # imagens e assets
├─ core/                        # tipos TypeScript compartilhados
└─ backend/                     # (legado) API NestJS — não usada pelo site atual
```

> ℹ️ O site é **frontend-only**. As pastas `backend/` e `core/` são legado do projeto original e **não** são necessárias para rodar ou publicar o site. Para editar o conteúdo (serviços e tecnologias), altere [`frontend/src/data/portfolio.ts`](frontend/src/data/portfolio.ts).

## ☁️ Deploy

Deploy contínuo na **Vercel**: cada push na branch `main` publica automaticamente em produção (`gloubapp.com`). O *Root Directory* do projeto na Vercel é `frontend`.

## 📫 Contato

- 💬 **WhatsApp** — [wa.me/5532998359433](https://wa.me/5532998359433)
- 💼 **LinkedIn** — [Guilherme Louback](https://www.linkedin.com/in/guilherme-louback-45b530218/)
- 🐙 **GitHub** — [@GuilhermeLouback](https://github.com/GuilhermeLouback)

---

<div align="center">
<sub>Feito com Next.js &amp; café · © 2026 Guilherme Louback</sub>
</div>
