# TrybeSmith
O projeto Trybesmith, é uma API nos padrões REST/RESTFull de uma loja de artigos medievais, para cadastro de usuários, produtos e pedidos de compra com conexão MySQL, onde aqui pude exercer:
- Construir uma API com variáveis e objetos tipados com Typescript
- Utilizar o Nodejs com Express
- Validar autenticações com JsonWebToken
- Conexão com MySQL

## Como utilizar 
  - clonar o repositório
  - rodar o comando `npm install`
  - criar um arquivo `.env`na raiz do projeto e passar as variaveis de ambiente para acessar o banco de dados e um secreto para o jwt
  - rodar o comando `npm run dev`
## Rotas 

### POST/users
Essa rota server para criar um novo usuario atraves da url `http://localhost:3000/users`
E espera que seja passado no body da requisição o json 

```
{ 
  "username": "MAX2",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```

E como resposta dessa requisição é gerado um token e o status code 201
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InJlaWdhbCIsImNsYXNzZSI6Ikd1ZXJyZWlybyIsImxldmVsIjoxMCwicGFzc3dvcmQiOiIxZHJhZ2Fvbm9jZXUifSwiaWF0IjoxNjU5MzgxMzkzLCJleHAiOjE2NjE5NzMzOTN9.j_9bQjh8_djEEU_5ULfb8P0Up9k1VDm0n_dcQlDJBH0"
}
```

### Rota get/products
Essa rota lista todos os produtos atraves da url `http://localhost:3000/products`

O retorno esperado é um json e o status code 200

```
[
    {
        "id": 1,
        "name": "Espada curta",
        "amount": "10 peças de ouro",
        "orderId": null
    },
    {
        "id": 2,
        "name": "Escudo desnecessariamente grande",
        "amount": "20 peças de ouro",
        "orderId": 1
    },
    {
        "id": 3,
        "name": "Adaga de Aço Valírico",
        "amount": "1 peça de ouro",
        "orderId": 2
    }
]
```

### Rota post/products
Essa rota permite adicionar um novo produto atraves da url `http://localhost:3000/products`
E espera que seja passado no body da requisição o json 

```
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

O retorno esperado é um json e o status code 201

```
  {
      "id": 6,
      "name": "Espada longa",
      "amount": "30 peças de ouro"
  }
```

### Rota get/orders
Essa rota permite listar todas as orders atraves da url `http://localhost:3000/orders`

O retorno esperado é um json e o status code 200
```
[
    {
        "id": 1,
        "userId": 1,
        "productsIds": [
            2
        ]
    },
    {
        "id": 3,
        "userId": 2,
        "productsIds": [
            5
        ]
    },
    {
        "id": 2,
        "userId": 3,
        "productsIds": [
            3,
            4
        ]
    }
]