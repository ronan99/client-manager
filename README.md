# Client Manager
Gerenciador de clientes com posições x,y com opção de ordenar por melhor rota para visita.

## TODO
Adicionar mapa para selecionar pontos e desenhar tracejado de rota.

### Como Rodar:

Este README fornece instruções para configurar e executar o projeto React em conjunto com o NodeJs usando Docker.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Git
- Docker
- Docker Compose
- Node.js (npm)

## Instruções para Execução

### 1. Clone o Repositório

```bash
git clone <url-do-repo>
cd nome-do-repo
```

### 2. Instalar bibliotecas(Opcional)

O projeto irá rodar normalmente sem as instalações, mas em caso de desenvolvimento ou debug de código, recomendo instalar os pacotes da seguinte forma:

**Da Raiz do projeto execute**
```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3. Configuração do Docker
Na raiz do projeto, execute:

```bash
docker-compose build
docker-compose up -d
```

### 4. Banco e tabela

Acesse o banco de dados utilizando alguma ferramenta de acesso a bancos Postgres( Utilizei Dbeaver).
Crie a tabela com o SQL do arquivo [Tabela cliente](https://github.com/ronan99/client-manager/blob/main/backend/src/database/client.sql)


### 5. Acesse o Frontend
   Abra o navegador e acesse:

   [http://localhost:9000](http://localhost:9000)

### 6. Acesse o Backend
   Para acessar o backend, requisições podem ser feitas para:

   [http://localhost:8080](http://localhost:8080)
