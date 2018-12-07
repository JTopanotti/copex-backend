## copex-backend
# Backend para a Aplicação COPEX (UNESC), feita em Javascript (NodeJS)

**Instalação de dependências**
```
cd {diretório do pojeto}
npm install
```

**Como rodar o servidor backend**
```
node index.js
```

# Descrição rápida dos diretórios /models, /routes, /controllers

**/models**
Contém os modelos definidos em Javascript, que espelham as tabelas no banco de dados.
Operações feitas com esses modelos são replicadas no banco, seguindo a documentação da Sequelize, que é a biblioteca utilizada para fazer essa modelagem.

**/routes**
Esse diretório é onde se encontra as definições das rotas URL, que fazem a conexão com o Controller para efetuar as operações com os modelos.

**/controllers**
Os Controllers são o meio termo entre o modelo de banco e a interface da aplicação.
