Este é um projeto em [Next.js](https://nextjs.org) com Typescript, Tailwindcss, zustand, Docker e GitHub Actions.

## Objetivo
Este projeto simula um ecomerce onde é listado uma lista de filmes e realizado uma compra.

<br>

# Disclamer

As informações como deploy na Versel, AWS, e utlização de uma api externa, podem ter sido tiradas do ar, atualmente a lista de filmes é utilizado hardcode.

## Deploy
Para o deploy foram utilizadas duas formas:
  - deploy na Vercel  [https://we-movies-song.vercel.app/](https://we-movies-song.vercel.app/)
  - deploy na AWS utilizando EC2, com Github actions, Docker e Nginx, o resultado é visto na url [http://3.13.218.63/](http://3.13.218.63/)

*Para os dois casos a API [https://wefit-movies.vercel.app](https://wefit-movies.vercel.app) DEVE estar em disponível e em execução.


## Instalação

Faça o clone do repositorio, em seguida crie o .env

```bash
NEXT_PUBLIC_BASE_URL=https://wefit-movies.vercel.app
```

Instale as dependencias:
```bash
  npm install
```

Para rodar em desenvolvimento digite:
```bash
  npm run dev
```

Para rodar em produção digite:
```bash
  npm run build
  npm run start
```
A aplicação pode ser vista na URL
[http://localhost:3000/](http://localhost:3000/)


## Docker

Faça o build do Docker para construir as imagens definidas no `docker-compose.yml`, assim o projeto já inicia em um container Docker na porta :3000
```bash
  docker-compose up --build
```

A aplicação pode ser vista na URL
[http://localhost:3000/](http://localhost:3000/)


## Deploy EC2

O projeto está configurado com o arquivo deploy.yml. No repositório do projeto no GitHub, é necessário registrar as variáveis de ambiente no GitHub Secrets.

As variáveis a serem configuradas são:

```bash
  SSH_PRIVATE_KEY: ${{ secrets.EC2_SSH_KEY }}
  HOST: ${{ secrets.EC2_HOST }}
  USERNAME: ${{ secrets.EC2_USERNAME }}
```

O arquivo `deploy.yml` será executado automaticamente sempre que é feito um push na branch main

*Além disso é necessario configurar a instância EC2, os Grupos de segurança e de preferência, utilizar um IP elástico.
