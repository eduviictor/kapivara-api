# Kapivara API

Para rodar o projeto siga os seguintes passos:

- Na pasta do projeto, rode `cp .env.example .env` e preencha os respectivos dados no arquivo .env.
- Rode `yarn && yarn build && yarn && yarn start`
- Após isso é só acessar [http://localhost:3000]([https://link](http://localhost:3000)).
- Caso queira rodar o projeto com o docker é só usar o seguinte comando: `docker-compose up -d`.
  
O projeto está atualmente rodando no heroku no seguinte link: [https://kapivara.herokuapp.com](https://kapivara.herokuapp.com).

Documentação do projeto: [Documentação](https://documenter.getpostman.com/view/4986240/TVYM5bUH#f4def279-3e74-41bd-b1cd-fc0bf021ac67)


Rotas:


- GET - /deals (Buscar negócios do Pipedrive)
- GET - /bling/order/32 (Buscar item no Bling)
- POST - /pipedrive-bling (Pegar itens do Pipedrive e salvar no Bling)
- POST - /bling/order (Salvar itens no Bling)