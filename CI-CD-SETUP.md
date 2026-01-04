# 🚀 Setup CI/CD - Landing Page AXIO

Deploy automático via GitHub Actions quando fizer push na branch `main`.

**Repositório:** https://github.com/VanthuirMaia/LP_Axio

---

## 📋 Pré-requisitos

- [x] VPS com Docker e Docker Compose
- [x] Traefik rodando (já configurado)
- [x] Repositório GitHub: https://github.com/VanthuirMaia/LP_Axio
- [x] Acesso SSH à VPS

---

## 🔧 Configuração - Passo a Passo

### 1️⃣ Configurar SSH Key na VPS

```bash
# Na VPS, criar diretório para o projeto
mkdir -p /opt/axio/landing-page
cd /opt/axio/landing-page

# Gerar chave SSH (se não tiver)
ssh-keygen -t ed25519 -C "deploy-axio-lp" -f ~/.ssh/deploy_axio_lp -N ""

# Adicionar chave pública ao authorized_keys
cat ~/.ssh/deploy_axio_lp.pub >> ~/.ssh/authorized_keys

# Mostrar chave PRIVADA (você vai precisar dela)
cat ~/.ssh/deploy_axio_lp
```

**⚠️ IMPORTANTE:** Copie a chave privada completa (incluindo `-----BEGIN` e `-----END`)

---

### 2️⃣ Configurar Secrets no GitHub

Acesse: https://github.com/VanthuirMaia/LP_Axio/settings/secrets/actions

Clique em **"New repository secret"** e adicione:

#### Secret 1: `VPS_HOST`
- **Name:** `VPS_HOST`
- **Value:** IP ou domínio da sua VPS (ex: `123.45.67.89` ou `serveraxio.com`)

#### Secret 2: `VPS_USERNAME`
- **Name:** `VPS_USERNAME`
- **Value:** `root` (ou seu usuário SSH)

#### Secret 3: `VPS_SSH_KEY`
- **Name:** `VPS_SSH_KEY`
- **Value:** Cole a chave privada completa que você copiou no passo 1

#### Secret 4: `VPS_PORT` (opcional)
- **Name:** `VPS_PORT`
- **Value:** `22` (porta SSH, deixe em branco se for 22)

---

### 3️⃣ Clonar Repositório na VPS

```bash
# Na VPS
cd /opt/axio/landing-page

# Clonar repositório
git clone https://github.com/VanthuirMaia/LP_Axio.git .

# Ou se já existir, apenas pull
git pull origin main
```

---

### 4️⃣ Verificar Rede Docker

```bash
# Verificar se a rede gestto_default existe
docker network ls | grep gestto_default

# Se não existir, criar
docker network create gestto_default
```

---

### 5️⃣ Primeiro Deploy Manual (Recomendado)

```bash
# Na VPS, no diretório do projeto
cd /opt/axio/landing-page

# Dar permissão ao script
chmod +x deploy.sh

# Executar deploy
./deploy.sh
```

**Ou manualmente:**

```bash
# Build e start
docker-compose build
docker-compose up -d

# Verificar logs
docker-compose logs -f axio_lp
```

---

### 6️⃣ Testar CI/CD Automático

1. **Fazer uma alteração no código** (qualquer arquivo)
2. **Commit e push:**

```bash
git add .
git commit -m "test: CI/CD deployment"
git push origin main
```

3. **Acompanhar deploy:**
   - Acesse: https://github.com/VanthuirMaia/LP_Axio/actions
   - Você verá o workflow rodando em tempo real

4. **Verificar na VPS:**

```bash
# Ver logs do deploy
docker-compose logs -f axio_lp

# Ver container rodando
docker ps | grep axio_lp
```

---

## 🔍 Verificar se está Funcionando

### Na VPS:

```bash
# Ver containers
docker ps | grep axio

# Ver logs
docker logs axio_lp --tail=50

# Testar localmente
curl -I http://localhost  # Deve retornar 200

# Ver configuração do Traefik
docker logs gestto_traefik | grep axio
```

### No navegador:

- **HTTP:** http://axio.com.br (deve redirecionar para HTTPS)
- **HTTPS:** https://axio.com.br
- **WWW:** https://www.axio.com.br (deve redirecionar para sem www)

---

## 📊 Workflow do CI/CD

Quando você faz **push na main**, o GitHub Actions:

1. ✅ Faz checkout do código
2. ✅ Instala Node.js 20
3. ✅ Instala dependências (`npm ci`)
4. ✅ Faz build da aplicação (`npm run build`)
5. ✅ Compacta arquivos (dist + configs)
6. ✅ Para container atual na VPS (com backup)
7. ✅ Copia arquivos via SSH
8. ✅ Extrai e faz build da nova imagem Docker
9. ✅ Inicia novo container
10. ✅ Verifica saúde do container
11. ✅ Limpa backups antigos

**Tempo estimado:** 2-3 minutos

---

## 🛠️ Comandos Úteis

### Ver logs do GitHub Actions em tempo real:

```bash
# Instalar GitHub CLI (se não tiver)
# https://cli.github.com/

# Ver runs
gh run list --repo VanthuirMaia/LP_Axio

# Ver logs do último run
gh run view --repo VanthuirMaia/LP_Axio --log
```

### Na VPS:

```bash
# Restart rápido
docker-compose restart

# Rebuild completo
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# Ver rede
docker network inspect gestto_default

# Ver containers na mesma rede
docker network inspect gestto_default | grep -A 3 Containers

# Acessar container
docker exec -it axio_lp sh
```

---

## 🚨 Troubleshooting

### Erro: "Permission denied (publickey)"

**Solução:** Verificar se a chave SSH está correta no GitHub Secrets

```bash
# Na VPS, testar chave
ssh -i ~/.ssh/deploy_axio_lp root@localhost
```

### Erro: "network gestto_default not found"

**Solução:** Criar a rede

```bash
docker network create gestto_default
```

### Container não inicia

**Solução:** Ver logs detalhados

```bash
docker-compose logs axio_lp
docker inspect axio_lp
```

### Traefik não roteia para o container

**Solução:** Verificar labels

```bash
docker inspect axio_lp | grep -A 20 Labels

# Ver configuração do Traefik
docker logs gestto_traefik | grep axio-lp
```

### Deploy falha no GitHub Actions

**Solução:** Ver logs no Actions tab e verificar secrets

1. Acesse: https://github.com/VanthuirMaia/LP_Axio/actions
2. Clique no workflow que falhou
3. Veja os logs de cada step

---

## 🔄 Rollback (Reverter Deploy)

Se algo der errado, você pode reverter:

```bash
# Na VPS
cd /opt/axio/landing-page

# Ver backups disponíveis
docker images | grep axio_lp_backup

# Parar container atual
docker-compose down

# Usar backup
docker tag axio_lp_backup_YYYYMMDD_HHMMSS axio_lp:latest
docker-compose up -d
```

---

## 📈 Melhorias Futuras (Opcional)

- [ ] Adicionar testes no workflow (npm test)
- [ ] Adicionar notificações (Slack, Discord, Telegram)
- [ ] Deploy em staging antes de produção
- [ ] Monitoramento com Prometheus/Grafana
- [ ] Backup automático antes de cada deploy

---

## 🎯 Estrutura Final na VPS

```
/opt/axio/
├── gestto/                  # Gestto (separado)
│   └── docker-compose.yml
│
└── landing-page/            # Landing Page
    ├── .git/
    ├── dist/                # Build gerado
    ├── src/                 # Código fonte
    ├── docker-compose.yml
    ├── Dockerfile
    ├── nginx.conf
    ├── deploy.sh
    └── ... (outros arquivos)
```

---

## ✅ Checklist Final

- [ ] Secrets configurados no GitHub
- [ ] SSH key configurada na VPS
- [ ] Rede `gestto_default` criada
- [ ] Primeiro deploy manual funcionou
- [ ] Domínio `axio.com.br` aponta para VPS
- [ ] Traefik está roteando corretamente
- [ ] SSL/HTTPS funcionando
- [ ] Redirect www → non-www funcionando
- [ ] GitHub Actions executando sem erros

---

**Pronto!** 🎉

Agora toda vez que você fizer **push na branch main**, o deploy será automático!

Para testar:

```bash
# Fazer uma mudança
echo "# Test" >> README.md

# Commit e push
git add .
git commit -m "test: automatic deployment"
git push origin main

# Acompanhar em:
# https://github.com/VanthuirMaia/LP_Axio/actions
```
