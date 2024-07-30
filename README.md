# Desafio Programador Jr

## Introdução
Este projeto é uma aplicação web desenvolvida para um desafio proposto de programação de nível júnior. Ele permite o gerenciamento de itens com diferentes características, como nome, unidade de medida, quantidade, preço, perecibilidade, data de validade e data de fabricação.

## Funcionalidades
 - *Cadastro de Itens*: Permite o cadastro de itens com nome, unidade de medida, quantidade, preço e outras características.
 - *Listagem de Itens*: Exibe uma lista dos itens cadastrados, com opções para editar ou excluir.
 - *Edição de Itens*: Possibilidade de editar informações dos itens cadastrados.
 - *Validação de Campos*: Regras específicas para campos de unidade de medida e preço, incluindo máscaras de entrada e validações.

## Pré-requisitos
 - [Node.js](https://nodejs.org/pt) (v14 ou superior)
 - [npm](https://www.npmjs.com/) (v6 ou superior)
 - [Vue CLI](https://cli.vuejs.org/) (opcional, mas recomendado para desenvolvimento)

 ## Instalação
 1. Clone o repositório:
```
git clone https://github.com/DWan-Dall/desafio-programador-jr.git
cd desafio-programador-jr
```

2. Instale as dependências:
```
npm install
```

## Uso
1. Inicie o servidor de desenvolvimento:
```
npm run serve
```

2. Acesse a aplicação no navegador:
```
http://localhost:8080
```

## Estrutura do Projeto
 - **src/components**: Componentes Vue reutilizáveis, como **ItemForm** e **ItemList**.
 - **src/views:** Páginas principais, como **FormPage** e **ListPage**.
 - **src/router:** Configuração das rotas da aplicação.
 - **src/store**: Estado global da aplicação (Vuex).

### Algumas Referências de Estudos Utilizada Nesse Projeto:
 - [Vue.js](https://pt.vuejs.org/guide/introduction.html).
 - [BootstrapVue](https://bootstrap-vue.org/).
 - [Jsfiddle](https://jsfiddle.net/).
 - [Udemy](https://www.udemy.com/course/curso-vue-js-vue-samurai-domine-os-conceitos-do-vuejs/).
 - [Microsoft Lear](https://learn.microsoft.com/pt-br/windows/dev-environment/javascript/vue-beginners-tutorial?source=recommendations).
 - [Developer Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage).

<details>

<summary></summary>
**Conclusão/Curiosidades**
    Projeto foi feito em Vue.js devido à empresa já utilizar a ferramenta. 
    Foram necessários 1,5 dias apenas para configurar o ambiente, noites mal dormidas, muita pesquisa e ajuda de algumas plataformas mais inteligentes. 

<div align="right"><a href="https://github.com/DWan-Dall">DWD💜 </a></div>

</details>