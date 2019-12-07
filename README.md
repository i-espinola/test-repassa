# Test Repassa API

Api server side

## Bonus 2

### Considerando o seguinte cenário

1- A cada venda realizada através de uma loja virtual, será enviado pelo portal, através de uma requisição RESTFul (POST), um evento para um novo sistema que deverá ser construido, este evento conterá o id do usuário e valor total do pedido.

2- Como usuário interno desejo ter um relatório onde poderei analisar dados consolidados sobre esses eventos. São eles: Quantidade de vendas e soma total das vendas.

3- Após o desenvolvimento de uma arquitetura convencional, isto é, cada requisição pega uma conexão com o pool de conexões com banco de dados (Postgres) e grava 1 registro. O servidor que foi disponibilizado suportou 1000 requisições por minuto.

4- Entretanto, atualmente a loja faz 1500 vendas por minuto.

Diante da arquitetura convencional descrita no cenário acima, como você melhoraria ou desenharia uma arquitetura para suportar as 1500 requisições por minuto (sem a necessidade de aumentar a infra-estrutura de servidores)?
