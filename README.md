# 🧱 Projeto NestJS

## 📌 Descrição

Projeto desenvolvido com o objetivo de fixar conceitos de desenvolvimento backend utilizando NestJS com Prisma ORM e banco de dados PostgreSQL.

## 🚀 Como usar

1. Clone o repositorio

```bash
git clone https://github.com/AngelimGabriel/nestjs-project.git
```

2. Acesse a pasta do projeto

```bash
cd nestjs-project
```

3. Instalação de dependências

```bash
npm install
```

4. Crie um arquivo `.env` na raiz do projeto.
5. Adicione a variável de ambiente para conexão com o banco de dados:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@HOST:PORTA/NOME_DO_BANCO?schema=SCHEMA"
```

6. Inicie o servidor em modo desenvolvimento:

```bash
npm run start:dev
```

O servidor estará disponível em: http://localhost:3000

## 🧾 Rotas

### 👤 Usuários (`/users`)

| Método | Rota         | Descrição               |
| ------ | ------------ | ----------------------- |
| GET    | `/users`     | Lista todos os usuários |
| GET    | `/users/:id` | Lista o usuario pelo ID |
| POST   | `/users`     | Cria um novo usuário    |
| PUT    | `/users/:id` | Atualiza um usuário     |
| DELETE | `/users/:id` | Remove um usuário       |

### 📦 Endereços (`/address`)

| Método | Rota           | Descrição                      |
| ------ | -------------- | ------------------------------ |
| GET    | `/address`     | Lista todos os endereços       |
| GET    | `/address/:id  | Lista o endereço pelo ID       |
| POST   | `/address`     | Cria um novo endereço          |
| PUT    | `/address/:id` | Atualiza um endereço existente |
| DELETE | `/address/:id` | Remove um endereço             |

## 📂 Estrutura de pastas

```bash
prisma
│   ├── prisma.service.ts
│   ├── prisma.module.ts
│   └── schema.prisma
src
├── address
│   ├── dto
│   ├── services
│   ├── controllers
│   └── address.module.ts
├── users
│   ├── dto
│   ├── services
│   ├── controllers
│   └── users.module.ts
├── app.module.ts
└── main.ts
```

## 🧾 Casos de uso

Para inserir novos usuários **com endereço**:

```json
{
  "name": "Fulano",
  "email": "fulano@gmail.com",
  "address": {
    "cep": "00000000",
    "logradouro": "Rua 0",
    "numero": "00",
    "complemento": "Casa",
    "bairro": "X",
    "cidade": "Y",
    "estado": "Z",
    "pais": "Brasil"
  }
}
```

**Sem endereço**:

```json
{
  "name": "Fulano",
  "email": "fulano@gmail.com"
}
```

Para adicionar um endereço a um usuário existente:

```json
{
  "cep": "00000000",
  "logradouro": "Rua 0",
  "numero": "00",
  "complemento": "Casa",
  "bairro": "X",
  "cidade": "Y",
  "estado": "Z",
  "pais": "Brasil",
  "userId": "USERID"
}
```

## 📫 Contato

Gabriel Angelim
github.com/AngelimGabriel
linkedin.com/in/gabrielangelim
