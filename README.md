<h1 align="center">
    <img alt="salvus-logo" src="assets/logo.svg" width="200px" />
</h1>
<div  align="center">
  <h3>
    Salvus é uma aplicação que conecta profissionais de saúde e os direciona para atendimentos. <br />
  </h3>
</div>
<p align="center">“Sua única limitação é você mesmo”!</blockquote>

<p align="center">
  <img alt="salvus-logo" src="assets/final.gif" width="1000px" />
</p>

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_forward-clonando-o-repositório">Clonando o repositório</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-rodando-backend">Rodando Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#package-rodando-frontend-web">Rodando Frontend Web</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o projeto

Landing Page criada em React.js, para conectar profissionais de saúde.


## :arrow_forward: Clonando o repositório

```sh
$ git clone https://github.com/alefecruz/salvus-challenge.git
```

## :wrench: Rodando backend

#### Para instalação das dependências do backend execute os comandos:
```sh
$ cd backend
$ npm i
ou
$ cd backend
$ yarn
```
#### Após a instalação do backend configure um banco de dados Postgres com as credenciais encontrada o arquivo ormconfig.json. Em seguida, execute as migrations com o comando:
```sh
$ npm run typeorm migration:run
ou
$ yarn typeorm migration:run
```

#### Agora execute o comando abaixo para inicializar o servidor:
```sh
$ npm run dev:server
ou
$ yarn dev:server
```

## :package: Rodando frontend web

```sh
$ cd frontend
$ npm i 
ou
$ cd frontend
$ yarn
```

#### Agora execute o comando abaixo para inicializar o frontend:
```sh
$ npm run start
ou
$ yarn start
```

## :memo: Licença

---

Desafio feito com ♥ by Álefe Cruz :wave: [Acesse meu portifólio!](https://www.alefecruz.com.br/)

