# dsdeliver-sds2

## Projeto criado durante a semana dev superior

### O Projeto

Trata-se de uma aplicação de delivery. O projeito foi feito em monorepo.

O **backend** fornece uma API REST (Java + Postgres) que se comunica tanto com o front-web quanto o mobile, e é responsável pela permanência dos dados no Banco de Dados.

Operações disponíveis:
- GET /orders **Lista todos os pedidos**
- PUT /orders/{orderId}/delivered **Atualiza o pedido como entregue**
- POST /orders **Cria um novo pedido**


O **Frontend web** (React) é responsável por listar os produtos disponíveis (seedados) e criar novos pedidos, à partir destes produtos;

O **Frontend mobile** (React Native) simula um app para o entregador, no qual recebe a geolocalização do pedido e pode marcá-lo como entregue.



### Tecnologias Utilizadas
# 

[back-end](https://github.com/risaddex/dsdeliver-sds2/tree/main/backend)

- Spring Boot (JPA + Hibernate + Web)
- PostgreSQL (RDS)

[front-web](https://github.com/risaddex/dsdeliver-sds2/tree/main/front-mobile)

- React (CRA + Typescript)
- React Leaflet (mapas)
- Axios
- React Toastify
- React Router DOM

[front-mobile](https://github.com/risaddex/dsdeliver-sds2/tree/main/front-web)

- React Native (Expo + Typescript)
- Axios

[published version (netlify)](https://risaddex.netlify.app)
