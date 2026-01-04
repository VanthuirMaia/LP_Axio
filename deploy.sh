#!/bin/bash

# Deploy script para Landing Page AXIO
# Este script pode ser executado manualmente na VPS

set -e  # Exit on error

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configurações
DEPLOY_DIR="/opt/axio/landing-page"
BACKUP_DIR="/opt/axio/backups"
CONTAINER_NAME="axio_lp"

echo -e "${YELLOW}🚀 Iniciando deploy da Landing Page AXIO...${NC}"

# Criar diretórios se não existirem
mkdir -p $DEPLOY_DIR
mkdir -p $BACKUP_DIR

cd $DEPLOY_DIR

# Verificar se há container rodando
if docker ps -q -f name=$CONTAINER_NAME > /dev/null 2>&1; then
    echo -e "${YELLOW}📦 Container atual encontrado. Criando backup...${NC}"

    # Backup do container
    BACKUP_NAME="${CONTAINER_NAME}_backup_$(date +%Y%m%d_%H%M%S)"
    docker stop $CONTAINER_NAME
    docker commit $CONTAINER_NAME $BACKUP_NAME

    echo -e "${GREEN}✅ Backup criado: $BACKUP_NAME${NC}"
fi

# Parar e remover container antigo
echo -e "${YELLOW}🛑 Removendo container antigo...${NC}"
docker-compose down 2>/dev/null || true

# Pull do código (se estiver usando Git)
if [ -d ".git" ]; then
    echo -e "${YELLOW}📥 Atualizando código do Git...${NC}"
    git pull origin main
else
    echo -e "${YELLOW}⚠️  Diretório não é um repositório Git. Certifique-se que os arquivos foram copiados.${NC}"
fi

# Build da nova imagem
echo -e "${YELLOW}🔨 Building nova imagem Docker...${NC}"
docker-compose build --no-cache

# Iniciar container
echo -e "${YELLOW}▶️  Iniciando novo container...${NC}"
docker-compose up -d

# Aguardar container iniciar
echo -e "${YELLOW}⏳ Aguardando container iniciar...${NC}"
sleep 10

# Verificar saúde
if docker ps | grep -q $CONTAINER_NAME; then
    echo -e "${GREEN}✅ Deploy concluído com sucesso!${NC}"
    echo -e "${GREEN}Container $CONTAINER_NAME está rodando.${NC}"

    # Mostrar logs
    echo -e "\n${YELLOW}📋 Últimos logs:${NC}"
    docker-compose logs --tail=30

    # Limpar backups antigos (manter últimos 5)
    echo -e "\n${YELLOW}🧹 Limpando backups antigos...${NC}"
    docker images | grep ${CONTAINER_NAME}_backup | tail -n +6 | awk '{print $3}' | xargs -r docker rmi

    echo -e "\n${GREEN}🎉 Deploy finalizado com sucesso!${NC}"
    echo -e "${GREEN}Acesse: https://axio.com.br${NC}"
else
    echo -e "${RED}❌ Erro: Container não está rodando!${NC}"
    echo -e "${RED}Verificando logs:${NC}"
    docker-compose logs --tail=50

    # Tentar reverter para backup
    if docker images | grep -q $BACKUP_NAME; then
        echo -e "${YELLOW}🔄 Tentando reverter para backup...${NC}"
        docker tag $BACKUP_NAME ${CONTAINER_NAME}:latest
        docker-compose up -d
    fi

    exit 1
fi

# Mostrar status
echo -e "\n${YELLOW}📊 Status dos containers:${NC}"
docker-compose ps
