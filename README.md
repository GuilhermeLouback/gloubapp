# gloubapp

Portfólio pessoal full‑stack de Guilherme Louback. O repositório é um monorepo
organizado em três workspaces independentes: o site em **Next.js**, uma **API**
em NestJS e uma camada de **domínio** compartilhada em TypeScript.

## Arquitetura

```
gloubapp/
├── frontend/   # Site / portfólio — Next.js 15 (App Router) + React 19
├── backend/    # API REST — NestJS 11 + Prisma
├── core/       # Domínio compartilhado em TypeScript (Projeto, Tecnologia, …)
├── Dockerfile  # Build do backend para produção
└── fly.toml    # Configuração de deploy no Fly.io
```

- **frontend/** — Next.js 15, React 19, TypeScript, Tailwind CSS v4, Radix UI,
  Embla Carousel e `react-markdown`.
- **backend/** — NestJS 11 com Prisma 6 como ORM. Exposto na porta `4000` e
  publicado no Fly.io (região `gru`).
- **core/** — entidades e tipos de domínio (`Projeto`, `Tecnologia`, `Id`)
  reutilizados pelo restante da aplicação.

## Pré‑requisitos

- Node.js 20+
- npm

## Como rodar em desenvolvimento

Na raiz do projeto:

```bash
# backend + frontend juntos (via concurrently)
npm run dev

# apenas o frontend
npm run dev:front
```

O frontend sobe em `http://localhost:3000` por padrão e a API em
`http://localhost:4000`.

Cada workspace também pode ser executado isoladamente a partir da sua própria
pasta (`cd frontend && npm run dev`, `cd backend && npm run start:dev`).

## Deploy

O backend é empacotado pelo `Dockerfile` e publicado no [Fly.io](https://fly.io)
(`app = "gloubapp"`). O deploy é automatizado pelo workflow
`.github/workflows/fly-deploy.yml`.

## Licença

ISC.
