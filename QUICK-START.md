# ⚡ Quick Start - Deploy Rápido

## 🎯 Para quem tem pressa

### 1. Configurar Secrets no GitHub (5 minutos)

Acesse: https://github.com/VanthuirMaia/LP_Axio/settings/secrets/actions

**Na VPS, rode:**
```bash
# Gerar chave SSH
ssh-keygen -t ed25519 -C "deploy" -f ~/.ssh/deploy_axio -N ""
cat ~/.ssh/deploy_axio.pub >> ~/.ssh/authorized_keys

# Copiar chave privada (cole no GitHub Secret VPS_SSH_KEY)
cat ~/.ssh/deploy_axio
```

**Adicionar 3 secrets no GitHub:**
1. `VPS_HOST` = IP da sua VPS
2. `VPS_USERNAME` = `root`
3. `VPS_SSH_KEY` = Cole a chave privada completa

---

### 2. Setup inicial na VPS (2 minutos)

```bash
# Criar estrutura
mkdir -p /opt/axio/landing-page
cd /opt/axio/landing-page

# Clonar repo
git clone https://github.com/VanthuirMaia/LP_Axio.git .

# Verificar/criar rede
docker network create gestto_default || true

# Primeiro deploy
chmod +x deploy.sh
./deploy.sh
```

---

### 3. Testar CI/CD (1 minuto)

```bash
# No seu PC, fazer qualquer mudança
echo "# CI/CD Test" >> README.md
git add .
git commit -m "test: CI/CD"
git push origin main
```

**Ver deploy:** https://github.com/VanthuirMaia/LP_Axio/actions

---

## ✅ Verificar

```bash
# Container rodando?
docker ps | grep axio_lp

# Site acessível?
curl -I https://axio.com.br
```

**Pronto!** 🎉 Agora todo push na main faz deploy automático!

---

## 📞 Problemas?

**Deploy falha no GitHub Actions?**
- Verificar secrets: https://github.com/VanthuirMaia/LP_Axio/settings/secrets/actions
- Ver logs: https://github.com/VanthuirMaia/LP_Axio/actions

**Container não inicia?**
```bash
docker-compose logs axio_lp
```

**Traefik não roteia?**
```bash
docker logs gestto_traefik | grep axio
```

---

📖 **Documentação completa:** [CI-CD-SETUP.md](./CI-CD-SETUP.md)
