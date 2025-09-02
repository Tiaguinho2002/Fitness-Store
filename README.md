# Fitness-Store

Descrição do Projeto
Este projeto é uma loja virtual de suplementos e produtos fitness, desenvolvida com React para o front-end e um backend em ASP.NET Core para gerenciar pagamentos. O objetivo principal é criar uma plataforma completa e funcional para a venda de produtos de saúde e bem-estar.

Demonstração
!(https://www.google.com/search?q=https://placehold.co/1200x600/000000/FFFFFF%3Ftext%3DIMAGEM%2BDA%2BTELA%2BINICIAL)

Tecnologias Utilizadas
Front-end: React, TypeScript, SASS.

Backend: ASP.NET Core, C#.

Pagamentos: Integração com a API do Mercado Pago (PIX, Boleto e Cartão de Crédito).

Funcionalidades
Navegação por Produtos: Os usuários podem buscar e navegar por diferentes categorias de suplementos.

Carrinho de Compras: Adição e remoção de produtos do carrinho.

Login e Cadastro: Autenticação de usuários.

Pagamentos: Finalização da compra via PIX, Boleto ou cartão.

Estrutura do Projeto
O projeto é dividido em duas pastas principais:

FRONTEND/: Contém a aplicação React, responsável pela interface do usuário e pela comunicação com a API.

BACKEND/: Contém a API em ASP.NET Core que gerencia a lógica de negócio e a integração com o Mercado Pago.

Como Executar o Projeto Localmente
Pré-requisitos
Node.js (para o front-end)

.NET SDK (para o backend)

1. Backend (API de Pagamento)
Navegue até a pasta do backend.

Restaure as dependências: dotnet restore

Configure seu Access Token do Mercado Pago no arquivo appsettings.json.

Inicie a API: dotnet run

2. Front-end (React)
Navegue até a pasta do front-end.

Instale as dependências: npm install

Inicie a aplicação: npm start

O projeto estará disponível em http://localhost:3000 (ou outra porta padrão do React).

Como Contribuir
Fique à vontade para contribuir com este projeto! Siga os passos abaixo:

Faça um fork do repositório.

Crie uma nova branch (git checkout -b feature/sua-feature).

Faça suas alterações e commit-as (git commit -m 'feat: nova funcionalidade').

Envie suas alterações (git push origin feature/sua-feature).

Abra um Pull Request.
