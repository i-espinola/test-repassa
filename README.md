# Test Repassa API

## Instalação

**NOTA:** Para executar qualquer um dos comandos abaixo, é imprescindível ter o gerenciador de dependencia NPM instalado globalmente em seu computador, e nagevar para dentro do diretório root da aplicação para que todos os comandos possam ser executados com sucesso.

### Instalação local

Para fazer a instalação de todas as dependencias da aplicação em modo de desenvolvimento, execute a seguinte linha de comando no terminal

    npm install

**Nota**: Se após a intalação você receber informações de vulnerabilidades nas dependencias instaladas, execute o seguinte comando para corrigir eventuais vulnerabilidades

    npm audit fix && npm audit fix --force

### Modo desenvolvimento

Os arquivos do código fonte da aplicação estão contidos dentro do diretório `./src`.
Após concluir a instalação de todas as dependencias da aplicação, é possível executar o comando de desenvolvimento no terminal

    npm run dev

Depois de executar o comando acima, abra [http://localhost:3030](http://localhost:3030) para renderizar a aplicação no seu browser preferido.
A página será recarregada sempre que fizer edições no seu código fonte, você também verá quaisquer eventuais erros no código no seu console e no próprio browser.

### Modo produção

Com esse comando será inicializado um servidor **_Express_** e executara os arquivos de **produção** no diretório `./public`, que por padrão, busca o arquivo `index.js`.

    npm run start

### Construção (Transpilar)

Este comando cria os arquivos de produção dentro do diretório `./public`. Os arquivos de produção são transpilados e minificados para obter uma melhor performance e otimização de trafego de dados ao acessar a aplicação. Para construir a aplicação em modo producão, execute o seguinte comando

    npm run build

**Nota**: Se você possui um servidor local capaz de executar aplicações web, e quiser publicar o projeto com o comando `npm run build`, não se esqueça de ajustar o caminho relativo no arquivo `./package.json` na propriedade `homepage:`

## Uso da API

Esta API faz operações CRUD a partir de requisições recebidas via protocolo HTTP. A URL da API em questão é:

    https://repassa-api.herokuapp.com/api

### Criar um novo funcionário - POST

Para criar um novo funcionário basta enviar uma requisição com o método `POST` com os parametros *name*, *login*, *feedback* com o prefixo `/create` logo após a URL da API.
Desta forma a requisição deve ser assim:

    https://repassa-api.herokuapp.com/api/create?name=kiko&login=kikinho&feedback=Criança mimada, e não muito inteligente.

### Atualizar um funcionário - PUT

Para atualizar um funcionário basta enviar uma requisição com o método `PUT` com os parametros *name*, *login*, *feedback*, e informar o ID do funcionário logo após a URL da API.
Desta forma a requisição deve ser assim:

    https://repassa-api.herokuapp.com/api/5def8be15ee04b004c0ab78d?name=kiko&login=tesouro&feedback=Criança mimada, e não muito inteligente.

### Deletar um funcionário - GET

Para deletar um funcionário basta enviar uma requisição com o método `DELETE` com o respectivo ID do funcionário logo após a URL da API.
Desta forma a requisição deve ser assim:

    https://repassa-api.herokuapp.com/api/5def8be15ee04b004c0ab78d

### Buscar um funcionário - GET

Para buscar um funcionário basta enviar uma requisição com o método `GET` com o respectivo ID do funcionário logo após a URL da API.
Desta forma a requisição deve ser assim:

    https://repassa-api.herokuapp.com/api/5def8be15ee04b004c0ab78d

### Listar todos funcionários - GET

Para listar todos funcionário basta enviar uma requisição com o método `GET` com o prefixo `/list` logo após a URL da API.
Desta forma a requisição deve ser assim:

    https://repassa-api.herokuapp.com/api/list

## Principais tecnologias integradas

- [x] JavaScript / **ES6**.
- [x] MongoDB.
- [x] Nodejs.
- [x] ESlint.
- [x] Express.
- [x] Nodemon.
- [x] Babel.
- [x] NPM.
