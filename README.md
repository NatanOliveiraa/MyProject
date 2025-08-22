# Carrinho de Compras - Single Page Application (SPA)

## Visão Geral

Este projeto consiste em uma aplicação web de carrinho de compras de página única (SPA) construída com HTML, CSS e JavaScript puro. Ela simula um sistema básico de e-commerce onde os usuários podem adicionar, remover e ajustar a quantidade de produtos em um carrinho, com persistência de dados através do `LocalStorage` do navegador.

## Funcionalidades

A aplicação implementa os seguintes requisitos:

- **R01 Adição de produto ao carrinho**: O usuário pode adicionar produtos à lista de compras, e cada produto adicionado inicialmente tem a quantidade de 1.
- **R02 Remoção de produto do carrinho**: É possível remover produtos individualmente do carrinho.
- **R03 Alteração de quantidade de produto**: O usuário pode aumentar ou diminuir a quantidade de um produto específico no carrinho. Se a quantidade chegar a zero, o produto é automaticamente removido.
- **R04 Visualização do carrinho**: Exibe uma lista de todos os produtos no carrinho, juntamente com suas quantidades e preços individuais.
- **R05 Totalizador do carrinho**: Mostra o valor total de todos os produtos no carrinho, considerando suas quantidades.
- **R06 Persistência temporária do carrinho**: O estado do carrinho é salvo no `LocalStorage`, garantindo que os produtos permaneçam no carrinho mesmo após o usuário navegar para outras páginas ou fechar/reabrir o navegador.
- **R07 Limpeza do carrinho**: O usuário pode esvaziar todo o carrinho manualmente através de um botão dedicado.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização e layout responsivo.
- **JavaScript ES6+**: Lógica da aplicação, manipulação do DOM e gerenciamento do `LocalStorage`.

## Instalação e Execução

### Pré-requisitos

Você só precisa de um navegador web moderno (Chrome, Firefox, Edge, Safari, etc.) para executar esta aplicação. Não há dependências de backend ou servidores adicionais.

### Como Executar a Aplicação

1. Crie uma pasta para o projeto (ex: `carrinho-de-compras`).
2. Dentro dessa pasta, crie as subpastas `css` e `js`.
3. Crie os arquivos `index.html`, `README.md`, `test_plan.md` e `test_report.md` na raiz do projeto.
4. Crie o arquivo `style.css` dentro da pasta `css`.
5. Crie o arquivo `script.js` dentro da pasta `js`.
6. Copie o conteúdo fornecido para cada arquivo.
7. Abra o arquivo `index.html` em seu navegador web. Você pode fazer isso arrastando o arquivo para a janela do navegador ou clicando duas vezes nele.

**URL para acessar a aplicação:**
Basta abrir o arquivo `index.html` localmente. A URL será algo como `file:///caminho/para/seu/projeto/index.html`.

### Comandos para Executar Testes

Os testes para esta aplicação são manuais, conforme o planejamento de testes. Siga as instruções no `test_plan.md` para executar os cenários de teste.

## Estrutura do Projeto

```
.
├── css/
│   └── style.css           # Estilos da aplicação
├── js/
│   └── script.js           # Lógica da aplicação (JavaScript)
├── index.html              # Página principal da aplicação
├── README.md               # Este arquivo
├── test_plan.md            # Plano de testes
└── test_report.md          # Relatório dos resultados dos testes
```

## Configuração de Variáveis de Ambiente

Não há variáveis de ambiente a serem configuradas para esta aplicação, pois ela roda completamente no lado do cliente.

## Características da Interface

- **Design Limpo e Intuitivo**: A interface foi projetada para ser simples e fácil de usar, focando na funcionalidade principal do carrinho de compras.
- **Responsivo**: O layout se adapta a diferentes tamanhos de tela (desktops, tablets e celulares), garantindo uma boa experiência do usuário em qualquer dispositivo.

## Documentos Adicionais

- [Planejamento de Teste](test_plan.md)
- [Relatório de Testes](test_report.md)
