PEBA.JS Frontend
=====

PEBA é um projeto Open Source idealizado pelo Teresina Hacker Clube e que está sendo mantido atualmente pela [GoNuvem](http://sitegonuvem.herokuapp.com/). Ele é um indexador de dados públicos pelo qual você, eleitor, pode buscar por informações sobre políticos. Com isso esperamos que você consiga acompanhar e que te ajude a entender como nossos impostos estão sendo gastos pela classe política.

Este é o repositório do webapp escrito em Javascript utilizando ReactJS, NextJs, Styled Components e ChartsJs, que consome a [API do PEBA.JS](https://github.com/gonuvem/peba.js-backend)

---
Pacotes utilizados
---

* [React](https://github.com/facebook/react)
* [NextJS](https://github.com/zeit/next.js)
* [Styled Components](https://github.com/styled-components/styled-components)
* [Material-UI](https://github.com/mui-org/material-ui)
* [Axios](https://github.com/axios/axios)
* [Express](https://github.com/expressjs/express)
* [React ChartJs](https://github.com/reactjs/react-chartjs)
* [RandomColor](https://github.com/davidmerfield/randomColor)
* [React Paginate](https://github.com/AdeleD/react-paginate)
* [React SVG](https://github.com/tanem/react-svg)

---
Como executar?
---

Você precisará do npm. Ele é instalado junto ao [Node.js](https://nodejs.org/en/).

1. Instale as depedências utilizando o comando

    ```shell
    > npm install
    ```

2. Adicione o endereço base da [API](https://github.com/gonuvem/peba.js-backend) no arquivo ./general/Api.js, no local indicado:

    ```js
    ...

    const API = Axios.create({
        baseURL: 'endereço da API aqui',
        headers: {
            'accept': 'application/json',
            'content-type': 'text/plain'
        }
    });

    ...
    ```

3. Execute utilizando o comando

    ```shell
    > PORT=3000 npm run dev
    ```

---
Como colaborar?
---
Você pode nos ajudar abrindo issues através do Github reportando bugs e nos enviando sugestões. Aos que desejam colaborar com código, pedimos que enviem Pull Requests.

---
Onde nos encontrar?
---

Nos envie um email: contato@gonuvem.com
