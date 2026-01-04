#!/bin/bash

# Script de diagnóstico para troubleshooting do deploy

set -e

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Diagnóstico - Landing Page AXIO     ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

# 1. Verificar se container está rodando
echo -e "${YELLOW}1️⃣  Verificando containers...${NC}"
echo ""
if docker ps | grep -q axio_lp; then
    echo -e "${GREEN}✅ Container axio_lp está rodando${NC}"
    docker ps | grep axio_lp
else
    echo -e "${RED}❌ Container axio_lp NÃO está rodando!${NC}"
    echo ""
    echo "Containers parados:"
    docker ps -a | grep axio_lp || echo "Nenhum container axio_lp encontrado"
fi
echo ""

# 2. Verificar logs do container
echo -e "${YELLOW}2️⃣  Logs do container (últimas 30 linhas):${NC}"
echo ""
docker logs axio_lp --tail=30 2>&1 || echo -e "${RED}Não foi possível obter logs${NC}"
echo ""

# 3. Verificar rede Docker
echo -e "${YELLOW}3️⃣  Verificando rede gestto_default...${NC}"
echo ""
if docker network inspect gestto_default &> /dev/null; then
    echo -e "${GREEN}✅ Rede gestto_default existe${NC}"
    echo ""
    echo "Containers conectados:"
    docker network inspect gestto_default | grep -A 10 "Containers" || echo "Nenhum container conectado"
else
    echo -e "${RED}❌ Rede gestto_default NÃO existe!${NC}"
    echo ""
    echo "Criando rede..."
    docker network create gestto_default
    echo -e "${GREEN}✅ Rede criada. Reinicie o container com: docker-compose restart${NC}"
fi
echo ""

# 4. Verificar Traefik
echo -e "${YELLOW}4️⃣  Verificando Traefik...${NC}"
echo ""
if docker ps | grep -q traefik; then
    echo -e "${GREEN}✅ Traefik está rodando${NC}"
    docker ps | grep traefik
    echo ""
    echo "Logs do Traefik (filtrando axio):"
    docker logs $(docker ps -q -f name=traefik) --tail=50 2>&1 | grep -i axio || echo "Nenhuma menção a 'axio' nos logs"
else
    echo -e "${RED}❌ Traefik NÃO está rodando!${NC}"
    echo ""
    echo "O Traefik precisa estar rodando para rotear o tráfego."
    echo "Verifique a configuração do Traefik."
fi
echo ""

# 5. Verificar se o Nginx está respondendo dentro do container
echo -e "${YELLOW}5️⃣  Testando Nginx dentro do container...${NC}"
echo ""
if docker ps -q -f name=axio_lp &> /dev/null; then
    RESPONSE=$(docker exec axio_lp wget -qO- http://localhost 2>&1 | head -c 100)
    if [ -n "$RESPONSE" ]; then
        echo -e "${GREEN}✅ Nginx está respondendo dentro do container${NC}"
        echo "Primeiros 100 caracteres da resposta:"
        echo "$RESPONSE"
    else
        echo -e "${RED}❌ Nginx NÃO está respondendo!${NC}"
    fi
else
    echo -e "${RED}❌ Container não está rodando, não é possível testar${NC}"
fi
echo ""

# 6. Verificar arquivos dentro do container
echo -e "${YELLOW}6️⃣  Verificando arquivos no container...${NC}"
echo ""
if docker ps -q -f name=axio_lp &> /dev/null; then
    echo "Arquivos em /usr/share/nginx/html:"
    docker exec axio_lp ls -lh /usr/share/nginx/html || echo -e "${RED}Não foi possível listar arquivos${NC}"
    echo ""
    echo "Verificando se index.html existe:"
    if docker exec axio_lp test -f /usr/share/nginx/html/index.html; then
        echo -e "${GREEN}✅ index.html existe${NC}"
        SIZE=$(docker exec axio_lp stat -c%s /usr/share/nginx/html/index.html)
        echo "Tamanho: $SIZE bytes"
    else
        echo -e "${RED}❌ index.html NÃO existe!${NC}"
    fi
else
    echo -e "${RED}❌ Container não está rodando${NC}"
fi
echo ""

# 7. Verificar labels do Traefik
echo -e "${YELLOW}7️⃣  Verificando labels do Traefik no container...${NC}"
echo ""
if docker ps -q -f name=axio_lp &> /dev/null; then
    echo "Labels relacionadas ao Traefik:"
    docker inspect axio_lp | grep -A 2 "traefik" || echo "Nenhuma label do Traefik encontrada"
else
    echo -e "${RED}❌ Container não está rodando${NC}"
fi
echo ""

# 8. Teste de conectividade
echo -e "${YELLOW}8️⃣  Testando conectividade...${NC}"
echo ""
if docker ps -q -f name=axio_lp &> /dev/null; then
    CONTAINER_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' axio_lp)
    echo "IP do container: $CONTAINER_IP"
    echo ""
    if [ -n "$CONTAINER_IP" ]; then
        echo "Testando acesso direto ao IP do container:"
        curl -s -o /dev/null -w "Status HTTP: %{http_code}\n" http://$CONTAINER_IP || echo "Falha ao conectar"
    fi
else
    echo -e "${RED}❌ Container não está rodando${NC}"
fi
echo ""

# 9. Resumo e recomendações
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║           Resumo e Ações               ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

echo -e "${YELLOW}📋 Comandos úteis para debug:${NC}"
echo ""
echo "  Ver logs do container:     docker logs axio_lp -f"
echo "  Ver logs do Traefik:       docker logs \$(docker ps -q -f name=traefik) -f"
echo "  Restart do container:      docker-compose restart"
echo "  Rebuild do container:      docker-compose down && docker-compose up -d --build"
echo "  Entrar no container:       docker exec -it axio_lp sh"
echo "  Testar Nginx no container: docker exec axio_lp wget -qO- http://localhost"
echo ""

echo -e "${YELLOW}🔍 Possíveis causas do erro 404:${NC}"
echo ""
echo "1. Traefik não está roteando corretamente (verificar labels)"
echo "2. Container não está na rede gestto_default"
echo "3. Domínio não está apontando para o servidor"
echo "4. Traefik não está configurado para o domínio axio.com.br"
echo "5. Arquivos não foram copiados corretamente no build"
echo ""

echo -e "${GREEN}✅ Diagnóstico completo!${NC}"
echo ""
