# Projeto-livre-reprograma
MEU PROJETO FINAL DA REPROGRAMA



API - DELIVERY DA BELEZA
## 🚀 Descrição




   >Com o inicio da Pandemia as taxas de desemprego no País aumentaram ainda mais , e muitas pessoas estão em casa desempregadas ,
   mais uma vez a população precisa se reinventar e estão atuando de forma autonoma para ajuda na propria sobrevivência.<br>

   >
   >Pensando nisso desenvolvi esse projeto delivery da beleza ,onde os profissionais  da area da beleza e autonomos podem encontrar uma plataforma para cadastrar seus serviços , ajudando na divulgação fazendo uma relaçao de forma facil para acesso a clientes novos , por outro lado tambem temos os clientes que com essa plataforma teria a facilidade de achar e contactar profissionais da beleza.

h
# Sumário
=================
<!--ts-->
   * [Objetivos](#objetivos)
   * [Aprendizados](#aprendizados)
   * [Arquitetura Model View Controller](#arquitetura)
   * [Instalação](#instalação)
      * [Pre Requisitos](#pré-requisitos)
      * [Rodando o Back End](#rodando-o-back-end)
      * [Tecnologias](#tecnologias)
      * [Features](#features)
      * [Rotas](#rotas)
   * [Modelo com campos obrigatórios para teste: Postman ou Insomnia](#modelo-com-campos-obrigatórios-para-teste)
   * [Agradecimentos](#agradecimentos)
<!--te-->

## ✅Objetivos

- Cadastro de profissionais da beleza e seus serviços disponiveis;
- Busca de serviços para clientes interessados;
- Atualizaçao de dados de profissionais em relaçao aos serviços disponiveis ;
- Delete seria a exclusão de cadastro de profissional;


## ✅Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(). 

## ✅Arquitetura

        Arquitetura MVC
        |
        \--📂PROJETO-LIVRE-REPROGRAMA
            |    
            |   
            \--📂src
                |
                📂---controller
                |       
                |       filmesController.js
                |
                📂--database
                |    .mongoConfig.js   
                |
                📂---model
                |       
                |     .filmes.json  
                |     .filmeSchema.js
                |       
                📂---routes
                |      
                |       filmestoRoutes.js**
                |.env
                |.env.example
                | *app.js
                |*package-lock.json
                |*package.json
                |
                |*README.md
                |*server.js
                |
                |_      
 



## ✅Instalação
* Para realizar download do projeto, siga as instruções abaixo:

### 👩‍👧‍👦Pré-requisitos

Você precisa ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o database NoSQL [mongo Atlas](https://www.mongodb.com/pt-br/cloud/atlas/register)
E claro o bom e velho editor de código como [VSCode](https://code.visualstudio.com/)

### 👩‍👧‍👦Rodando o Back End 

Server Local

```bash
# Com o git
# Clone este repositório
$ git clone <git@github.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd Projeto-livre-reprograma

# Instale as dependências
$ npm install
$ npm instal mongoose

# Execute o servidor
$ npm start

# O servidor inciará na porta:33 - acesse <http://localhost:3000>
# Mongo conectado em mongodb://localhost:27017/forkids
```
* Modifique `.env` para receber as variáveis de ambiente e substitua para que seu servidor funcione adequadamente

Para acessar via Heroku, acesse o [link da API](https:///)

* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

## 🛠Tecnologias

Para a consturição do projeto, as seguintes tecnologiasforam utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [heroku](https://dashboard.heroku.com/apps)

### 👩‍👧‍👦Features

Funcionalidades da aplicação

- [x] Cadastros do estabelecimento - POST
- [x] Comentario - POST
- [x] Like ou deslike - POST
- [x] Busca - GET
- [x] Busca por Categoria, estado e cidade - GET
- [x] Atualização em todos os campos - PUT
- [x] Apagar - DELETE

### 👩‍👧‍👦Rotas

* local: http://localhost:



#### Retorna teste com apresentação 
{ mensagem: O app está rodando em http://localhost:3000 }
- [x] "/estabelecimentos" 

#### Cria novo cadastro de estabelecimento
- [x] "/estabelecimentos" 

#### Retorna estabelecimento por um id específico
- [x] "/:Id" 

#### Deleta cadastro do estabelecimento
- [x] "/estabelecimentos/[ID]" 


#### Dar um like em um estabelecimento
- [x] "/estabelecimentos/[ID]/like" 

#### Atualiza o cadastro de um estabelecimento (id não pode ser modificado)
- [x] "/estabelecimento/[ID]"


## ✅Modelo com campos obrigatórios para teste

### 👩‍👧‍👦 Estabelecimentos

{
    "nome": "Bar do Juarez", 
    "site": "http://www.estabelecimento1.com.br",
    "categoria": "restaurante",
    "logradouro": "Rua Hum",
    "numero": 2,
    "bairro": "centro",
    "cidade": "Jundiaí",
    "estado": "sp"
}


### 🚧 Projeto em Construção

        Autenticação
        Sistema de Login
        Ranking
        


# Agradecimentos

<p align="justify">Agradeço primeiramente a Deus pela oportunidade de fazer este curso e me da força para consegui terminar  a minha familia , meu esposo Kaio , meu irmão Gilson a todo apoio para nunca desistir , tambem a reprograma é claro por ter me selecionado  e pela oportunidade de consegui fazer esse bootcamp a cada dia aprendendo e amando a area de tecnologia , muito bom todo esse aprendizado e as amizades feitas ,pessoas maravilhosas dessa turma todas  as  professoras , a Raquel nossa facilitadora e Jess nossa cordenadora , e principalmente as alunas e colegas e amigas sempre uma ajudando a outra e assim conseguimos chega ao final , agradeço a todas meninas ta turma ON14 . <br>
E a Tassila que me apresentou esse curso  e a Reprograma , obrigada por partilhar a experiencia e me envolver com todo esse projeto de transição de carreira , o que possibilitou a chegar ate aqui , obrigada Tay<br>

Deus é a minha fortaleza e com ele tudo posso , ate mesmo programar o mundo!</p>

