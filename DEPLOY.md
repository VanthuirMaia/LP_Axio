# 🚀 Deploy da Landing Page AXIO

## Pré-requisitos

- Docker e Docker Compose instalados na VPS
- Rede Docker `axio-network` criada (mesma do Gestto)
- Traefik configurado para proxy reverso (se estiver usando)

## Deploy na VPS

### 1. Clonar/Atualizar repositório

```bash
cd /path/to/deploy
git pull origin main
```

### 2. Build e Deploy com Docker Compose

```bash
# Build da imagem
docker-compose build

# Iniciar container
docker-compose up -d

# Verificar logs
docker-compose logs -f axio-lp
```

### 3. Verificar Status

```bash
# Status dos containers
docker-compose ps

# Health check
docker inspect axio-landing-page | grep -A 10 Health
```

## Comandos Úteis

### Restart do serviço
```bash
docker-compose restart
```

### Parar serviço
```bash
docker-compose down
```

### Rebuild completo
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Ver logs em tempo real
```bash
docker-compose logs -f
```

### Acessar container
```bash
docker-compose exec axio-lp sh
```

## Configuração de Rede

Se a rede `axio-network` não existir, crie:

```bash
docker network create axio-network
```

## Configuração com Traefik

O `docker-compose.yml` já inclui labels do Traefik configurados para:

- Domínio: `axio.com.br` e `www.axio.com.br`
- SSL automático via Let's Encrypt
- Redirect de www para non-www

### Ajustar domínio

Edite as labels no `docker-compose.yml` se necessário:

```yaml
- "traefik.http.routers.axio-lp.rule=Host(`seu-dominio.com`)"
```

## Configuração sem Traefik

Se não estiver usando Traefik, ajuste as portas no `docker-compose.yml`:

```yaml
ports:
  - "80:80"  # HTTP
  - "443:443"  # HTTPS (se configurar SSL no nginx)
```

## Build Local (Desenvolvimento)

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Estrutura de Pastas na VPS

Recomendado:

```
/opt/axio/
├── gestto/          # Gestto em compose separado
│   └── docker-compose.yml
└── landing-page/    # Landing Page AXIO
    ├── docker-compose.yml
    ├── Dockerfile
    ├── nginx.conf
    └── ... (código fonte)
```

## Troubleshooting

### Container não inicia

```bash
# Ver logs detalhados
docker-compose logs axio-lp

# Verificar configuração
docker-compose config
```

### Erro de porta em uso

```bash
# Ver o que está usando a porta
sudo lsof -i :3001

# Alterar porta no docker-compose.yml
ports:
  - "NOVA_PORTA:80"
```

### Rebuild após mudanças

```bash
# Sempre que alterar código:
docker-compose down
docker-compose build
docker-compose up -d
```

## Monitoramento

### Verificar uso de recursos

```bash
docker stats axio-landing-page
```

### Backup

```bash
# Backup da imagem
docker save axio-lp > axio-lp-backup.tar

# Restaurar
docker load < axio-lp-backup.tar
```

## Atualização

```bash
#!/bin/bash
# Script de atualização (update.sh)

cd /opt/axio/landing-page
git pull origin main
docker-compose build
docker-compose up -d
docker-compose logs -f
```

## Notas Importantes

- A LP está configurada para rodar na porta **3001** por padrão
- Certifique-se que a rede `axio-network` é compartilhada com o Gestto
- O Nginx serve os arquivos estáticos com cache otimizado
- Health checks garantem que o container está saudável
- Logs são persistidos via Docker

## Suporte

Para problemas, verificar:
1. Logs do container: `docker-compose logs -f`
2. Status da rede: `docker network inspect axio-network`
3. Configuração do Traefik (se aplicável)
4. Firewall/portas abertas na VPS
