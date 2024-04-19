# Entendendo decisões arquiteturais e a estrutura do projeto

## Requisitos para rodar o projeto

### Setup de ambiente:

- [Node 20.12.2 LTS](https://nodejs.org/en/download)
- [Mysql 8.0.36](https://dev.mysql.com/downloads/installer/)

### Como rodar na minha máquina?

- Clone o projeto `git clone  https://github.com/thierryyuri/Muralis_desafio_nodejs.git `
- Rode `npm install`
- Rode `npm install nodemon`
- Rode `npm start`
- Pronto 🎉

### Estrutura do projeto

- `./src`: É a pasta onde se encontram todos os códigos dos controllers e o sql para criar o banco de dados
- `./src/config`: Local onde se encontra o arquivo sql para criar as tabelas do banco de dados e os inserts iniciais
- `./src/controllers`: Nesta pasta se encontram os controllers de cada classe. Nos controllers se encontram o código de acesso ao banco de dados e as funções básicas de create, read, update e delete.
- `index.js`: Arquivo onde estão configurados as rotas de acesso às APIs e chamam os códigos dos controllers
- `.env`: Arquivo de configuração da porta e ao banco de dados (alterar de acordo com as credênciais cadastradas no banco de dados Mysql

### Como me localizar no projeto?

- Todas rotas da API estão localidades no arquivo `index.js`. Caso deseje alterar ou verificar os rotas e quais metodos são chamados em cada rota, você pode verificar neste arquivo
  - Todos os `controllers` que representam os códigos do CRUD estão em `./src/controllers`
    - Cada classe tem seu próprio controller que você pode verificar e alterar sem afetar as demais classes

### Processo para instalar as dependências e rodar o projeto

- Instalar o node no computador
- Instalar o Mysql no computador
- Acessar o banco e criar um schema chamado `crud`
- Rodar o sql que se encontra em `./src/config`
- Acessar via `CMD` ou Terminal do `Visual Studio Code` a pasta raiz do projeto (onde se encontra o `index.js`)
- Rodar o comando `npm install` para instalar as dependências configuradas no package.json
- Rodar o comando `npm install nodemon` para instalar o nodemon caso ele não tenha sido instalado junto com o node
- Rodar o comando `npm start` para iniciar o servidor
- Acessar as API's utilizando o Postman