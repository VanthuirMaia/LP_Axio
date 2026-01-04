#!/bin/bash

# Script de setup automático para VPS
# Execute este script na VPS para configurar tudo automaticamente

set -e

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Setup Automático - Landing Page AXIO   ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

# Verificar se está rodando como root
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ Este script precisa ser executado como root${NC}"
    echo "Execute: sudo $0"
    exit 1
fi

# 1. Criar estrutura de diretórios
echo -e "${YELLOW}📁 Criando estrutura de diretórios...${NC}"
mkdir -p /opt/axio/landing-page
mkdir -p /opt/axio/backups
cd /opt/axio/landing-page

# 2. Clonar ou atualizar repositório
echo -e "${YELLOW}📥 Configurando repositório Git...${NC}"
if [ -d ".git" ]; then
    echo "Repositório já existe. Atualizando..."
    git pull origin main
else
    echo "Clonando repositório..."
    git clone https://github.com/VanthuirMaia/LP_Axio.git .
fi

# 3. Verificar Docker
echo -e "${YELLOW}🐳 Verificando Docker...${NC}"
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker não está instalado!${NC}"
    echo "Instale com: curl -fsSL https://get.docker.com | sh"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo -e "${YELLOW}⚙️  Instalando Docker Compose...${NC}"
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
fi

echo -e "${GREEN}✅ Docker OK${NC}"

# 4. Configurar rede
echo -e "${YELLOW}🌐 Configurando rede Docker...${NC}"
if ! docker network inspect gestto_default &> /dev/null; then
    echo "Criando rede gestto_default..."
    docker network create gestto_default
    echo -e "${GREEN}✅ Rede criada${NC}"
else
    echo -e "${GREEN}✅ Rede já existe${NC}"
fi

# 5. Gerar chave SSH para deploy
echo -e "${YELLOW}🔑 Configurando chave SSH para CI/CD...${NC}"
SSH_KEY_PATH="$HOME/.ssh/deploy_axio_lp"

if [ ! -f "$SSH_KEY_PATH" ]; then
    ssh-keygen -t ed25519 -C "deploy-axio-lp" -f "$SSH_KEY_PATH" -N ""
    cat "${SSH_KEY_PATH}.pub" >> "$HOME/.ssh/authorized_keys"
    chmod 600 "$HOME/.ssh/authorized_keys"
    echo -e "${GREEN}✅ Chave SSH gerada${NC}"
else
    echo -e "${GREEN}✅ Chave SSH já existe${NC}"
fi

# 6. Dar permissões ao script de deploy
echo -e "${YELLOW}🔧 Configurando permissões...${NC}"
chmod +x deploy.sh

# 7. Fazer primeiro build e deploy
echo -e "${YELLOW}🔨 Fazendo primeiro build...${NC}"
docker-compose build

echo -e "${YELLOW}▶️  Iniciando container...${NC}"
docker-compose up -d

# Aguardar container iniciar
sleep 10

# 8. Verificar saúde
echo ""
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║           Verificando Status           ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

if docker ps | grep -q axio_lp; then
    echo -e "${GREEN}✅ Container está rodando!${NC}"
    docker-compose ps
else
    echo -e "${RED}❌ Container não está rodando!${NC}"
    echo "Verificando logs:"
    docker-compose logs --tail=30
    exit 1
fi

# 9. Mostrar informações importantes
echo ""
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║     Configuração do GitHub Actions     ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

echo -e "${YELLOW}Para configurar CI/CD, adicione estes secrets no GitHub:${NC}"
echo -e "URL: ${BLUE}https://github.com/VanthuirMaia/LP_Axio/settings/secrets/actions${NC}"
echo ""

# Obter IP da VPS
VPS_IP=$(curl -s ifconfig.me)

echo -e "${GREEN}1. VPS_HOST${NC}"
echo "   Value: $VPS_IP"
echo ""

echo -e "${GREEN}2. VPS_USERNAME${NC}"
echo "   Value: root"
echo ""

echo -e "${GREEN}3. VPS_SSH_KEY${NC}"
echo "   Value: (copie a chave abaixo - INCLUINDO as linhas BEGIN e END)"
echo ""
echo -e "${YELLOW}═══════════════════════════════════════════════════════${NC}"
cat "$SSH_KEY_PATH"
echo -e "${YELLOW}═══════════════════════════════════════════════════════${NC}"
echo ""

# 10. Informações finais
echo ""
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║          Setup Completo! 🎉            ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

echo -e "${GREEN}✅ Estrutura criada em:${NC} /opt/axio/landing-page"
echo -e "${GREEN}✅ Container rodando:${NC} axio_lp"
echo -e "${GREEN}✅ Rede configurada:${NC} gestto_default"
echo -e "${GREEN}✅ Chave SSH gerada${NC}"
echo ""

echo -e "${YELLOW}📋 Próximos passos:${NC}"
echo ""
echo "1. Configure os secrets no GitHub (informações acima)"
echo "2. Faça push na branch main"
echo "3. Acompanhe o deploy: https://github.com/VanthuirMaia/LP_Axio/actions"
echo ""

echo -e "${YELLOW}🔍 Comandos úteis:${NC}"
echo ""
echo "  Ver logs:           docker-compose logs -f axio_lp"
echo "  Restart:            docker-compose restart"
echo "  Status:             docker-compose ps"
echo "  Deploy manual:      ./deploy.sh"
echo ""

echo -e "${BLUE}Documentação completa:${NC} CI-CD-SETUP.md"
echo ""
