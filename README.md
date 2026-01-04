# 🚀 Landing Page AXIO

Landing page profissional da **AXIO Software House**, especializada em automação inteligente e soluções com IA.

**Produto principal:** [Gestto](https://www.gestto.app.br) - Plataforma de gestão inteligente

**🔗 Repositório:** https://github.com/VanthuirMaia/LP_Axio

---

## 🎯 Sobre o Projeto

Landing page moderna e minimalista desenvolvida com:

- ⚡ **React 18** + TypeScript
- 🎨 **Tailwind CSS** + shadcn/ui
- 🏗️ **Vite** (build ultra-rápido)
- 🐳 **Docker** + Docker Compose
- 🔄 **CI/CD** automático via GitHub Actions
- 🔒 **Traefik** para proxy reverso e SSL

### Comandos Disponíveis

```bash
npm run dev          # Desenvolvimento (hot reload)
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # Lint do código
```

---

## ✨ Features da Landing Page

### Seções:
- ✅ Hero Section com foco em resultados
- ✅ Logos Section (clientes e métricas)
- ✅ Seção destacada do **Gestto** (produto principal)
- ✅ Cases de sucesso com métricas reais
- ✅ Depoimentos de clientes com localização
- ✅ Sobre a AXIO (missão, visão, valores)
- ✅ Footer completo com 4 colunas

### Características Técnicas:
- 📱 **100% Responsivo** (mobile-first)
- ⚡ **Performance otimizada** (build: 368KB gzipped)
- 🎨 **Design minimalista e profissional**
- 🔍 **SEO otimizado** (meta tags, structured data)
- 🔐 **Security headers** configurados
- 💾 **Cache otimizado** para assets estáticos

---

## 📁 Estrutura do Projeto

```
LP_Axio/
├── .github/workflows/deploy.yml   # GitHub Actions CI/CD
├── src/
│   ├── components/
│   │   ├── Header.tsx             # Header com top bar
│   │   ├── HeroSection.tsx        # Hero com foco em resultados
│   │   ├── GesttoSection.tsx      # ⭐ Destaque do Gestto
│   │   ├── CasesSection.tsx       # Cases de sucesso
│   │   ├── AboutSection.tsx       # Sobre a AXIO
│   │   └── Footer.tsx             # Footer expandido
│   ├── pages/Index.tsx
│   └── index.css
├── docker-compose.yml             # Config para Traefik
├── Dockerfile                     # Build multi-stage
├── nginx.conf                     # Nginx otimizado
└── deploy.sh                      # Script de deploy manual
```

---

## 🚀 Deploy Automático (CI/CD)

Todo **push na branch `main`** faz deploy automático na VPS!

### ⚡ Setup Rápido (5 minutos):

**1. Na VPS, execute o script de setup:**
```bash
curl -fsSL https://raw.githubusercontent.com/VanthuirMaia/LP_Axio/main/setup-vps.sh -o setup.sh
chmod +x setup.sh
./setup.sh
```

**2. Configure secrets no GitHub:**

Acesse: https://github.com/VanthuirMaia/LP_Axio/settings/secrets/actions

Adicione os 3 secrets que o script gerou (ele mostrará os valores):
- `VPS_HOST`
- `VPS_USERNAME`
- `VPS_SSH_KEY`

**3. Teste o CI/CD:**

```bash
# Faça qualquer mudança
git add .
git commit -m "test: CI/CD deployment"
git push origin main
```

Ver deploy: https://github.com/VanthuirMaia/LP_Axio/actions

📖 **Documentação completa:** [CI-CD-SETUP.md](./CI-CD-SETUP.md) | [QUICK-START.md](./QUICK-START.md)

---

## 💻 Desenvolvimento Local

### Pré-requisitos
- Node.js 20+
- npm ou yarn

### Instalação e Execução

```bash
# Clonar repositório
git clone https://github.com/VanthuirMaia/LP_Axio.git
cd LP_Axio

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse: http://localhost:8080

---

## 🐳 Deploy Manual com Docker

### Opção 1: Docker Compose (recomendado)

```bash
# Build e start
docker-compose build
docker-compose up -d

# Ver logs
docker-compose logs -f axio_lp
```

### Opção 2: Script de deploy

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 🛠️ Stack Tecnológica

### Frontend
- React 18.3.1
- TypeScript 5.8.3
- Tailwind CSS 3.4.17
- shadcn/ui (componentes)
- Lucide React (ícones)

### Build & Dev
- Vite 5.4.19
- PostCSS + Autoprefixer
- ESLint 9.32.0

### Deploy
- Docker + Docker Compose
- Nginx Alpine
- Traefik (proxy reverso + SSL)
- GitHub Actions (CI/CD)

---

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 📦 Bundle: 368 KB (gzipped: 111 KB)
- 🎨 CSS: 70 KB (gzipped: 12 KB)
- ⏱️ Build: ~27s

---

## 🔧 Configuração

### WhatsApp
Edite: `src/lib/whatsapp.ts`

```typescript
export const WHATSAPP = "5587981531743";
export const MSG_ATENDIMENTO = "Olá! Gostaria de conhecer a AXIO";
export const MSG_DEMO = "Quero agendar uma demonstração";
```

### SEO e Meta Tags
Edite: `index.html`

### Traefik
O `docker-compose.yml` já está configurado para:
- SSL automático (Let's Encrypt)
- Redirect HTTP → HTTPS
- Redirect www → non-www
- Security headers

---

## 🌐 URLs

- **Produção:** https://axio.com.br
- **Repositório:** https://github.com/VanthuirMaia/LP_Axio
- **Gestto:** https://www.gestto.app.br
- **Instagram:** https://www.instagram.com/axio.vm/

---

## 📝 Documentação

- **[CI-CD-SETUP.md](./CI-CD-SETUP.md)** - Setup completo do CI/CD
- **[QUICK-START.md](./QUICK-START.md)** - Guia rápido (5 min)
- **[DEPLOY.md](./DEPLOY.md)** - Deploy manual detalhado

---

## 🚨 Troubleshooting

### Deploy falha no GitHub Actions?
Ver logs: https://github.com/VanthuirMaia/LP_Axio/actions

### Container não inicia na VPS?
```bash
docker-compose logs axio_lp
docker ps | grep axio
```

### Traefik não roteia?
```bash
docker logs gestto_traefik | grep axio
docker network inspect gestto_default
```

---

## 👥 Contato

- **Email:** contato@axio.com.br
- **WhatsApp:** +55 (87) 98153-1743
- **Instagram:** [@axio.vm](https://www.instagram.com/axio.vm/)

---

## 📄 Licença

© 2025 AXIO Software House. Todos os direitos reservados.

---

**Desenvolvido com ❤️ pela equipe AXIO**
