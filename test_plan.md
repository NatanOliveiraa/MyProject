# Plano de Testes - Carrinho de Compras SPA

## Objetivo do Teste

Validar se a aplicação web de carrinho de compras SPA (Single Page Application) implementa corretamente todos os requisitos funcionais especificados (R01 a R07) e se a persistência de dados no `LocalStorage` está funcionando conforme o esperado.

## Escopo do Teste

Este plano de testes cobrirá os testes funcionais da aplicação.

## Requisitos a Serem Testados

- **R01 Adição de produto ao carrinho**: O usuário poderá adicionar produtos ao carrinho e ao adicionar o produto virá com quantidade inicial igual a 1.
- **R02 Remoção de produto do carrinho**: O usuário poderá remover um produto do carrinho.
- **R03 Alteração de quantidade de produto**: O usuário poderá aumentar ou diminuir a quantidade de um produto no carrinho.
- **R04 Visualização do carrinho**: O usuário poderá visualizar os produtos adicionados ao carrinho, suas quantidades e preços.
- **R05 Totalizador do carrinho**: O carrinho mostrará o valor total dos produtos adicionados, considerando a quantidade.
- **R06 Persistência temporária do carrinho**: O carrinho manterá os produtos adicionados enquanto o usuário estiver navegando no site.
- **R07 Limpeza do carrinho**: O usuário poderá esvaziar o carrinho manualmente.

## Estratégia de Teste

Serão realizados testes manuais exploratórios e de casos de uso, focando na interação do usuário com a interface e na validação da lógica do carrinho e da persistência de dados.

## Casos de Teste Detalhados

### Categoria: Adição de Produtos (R01)

| ID do Caso de Teste | Descrição do Caso de Teste | Passos de Execução | Resultado Esperado | Status |
|---|---|---|---|---|
| TC-ADD-001 | Adicionar um produto ao carrinho. | 1. Abrir a aplicação. <br> 2. Clicar no botão "Adicionar ao Carrinho" do "Produto A". | O "Produto A" aparece no carrinho com quantidade 1. O total do carrinho é atualizado. | Pendente |
| TC-ADD-002 | Adicionar o mesmo produto novamente. | 1. Executar TC-ADD-001. <br> 2. Clicar novamente no botão "Adicionar ao Carrinho" do "Produto A". | A quantidade do "Produto A" no carrinho é atualizada para 2. O total do carrinho é atualizado. | Pendente |
| TC-ADD-003 | Adicionar produtos diferentes. | 1. Abrir a aplicação. <br> 2. Adicionar "Produto A". <br> 3. Adicionar "Produto B". | "Produto A" e "Produto B" aparecem no carrinho, ambos com quantidade 1. O total do carrinho é atualizado corretamente. | Pendente |

### Categoria: Remoção de Produtos (R02)

| ID do Caso de Teste | Descrição do Caso de Teste | Passos de Execução | Resultado Esperado | Status |
|---|---|---|---|---|
| TC-REM-001 | Remover um produto do carrinho. | 1. Abrir a aplicação. <br> 2. Adicionar "Produto A" ao carrinho. <br> 3. Clicar no botão "Remover" ao lado do "Produto A" no carrinho. | O "Produto A" é removido do carrinho. O total do carrinho é atualizado. | Pendente |
| TC-REM-002 | Remover o único produto do carrinho. | 1. Abrir a aplicação. <br> 2. Adicionar "Produto B" ao carrinho. <br> 3. Clicar no botão "Remover" ao lado do "Produto B". | O carrinho fica vazio. A mensagem "Seu carrinho está vazio." é exibida. O total do carrinho é 0.00. | Pendente |

### Categoria: Alteração de Quantidade (R03)

| ID do Caso de Teste | Descrição do Caso de Teste | Passos de Execução | Resultado Esperado | Status |
|---|---|---|---|---|
| TC-QTY-001 | Aumentar a quantidade de um produto. | 1. Abrir a aplicação. <br> 2. Adicionar "Produto A" ao carrinho. <br> 3. Clicar no botão "+" ao lado do "Produto A". | A quantidade do "Produto A" no carrinho aumenta para 2. O total do carrinho é atualizado. | Pendente |
| TC-QTY-002 | Diminuir a quantidade de um produto. | 1. Abrir a aplicação. <br> 2. Adicionar "Produto B" ao carrinho (duas vezes, para ter quantidade 2). <br> 3. Clicar no botão "-" ao lado do "Produto B". | A quantidade do "Produto B" no carrinho diminui para 1. O total do carrinho é atualizado. | Pendente |
| TC-QTY-003 | Diminuir a quantidade até zero (remoção automática). | 1. Abrir a aplicação. <br> 2. Adicionar "Produto C" ao carrinho. <br> 3. Clicar no botão "-" ao lado do "Produto C". | O "Produto C" é removido do carrinho. O total do carrinho é atualizado. | Pendente |

### Categoria: Visualização e Totalizador (R04, R05)

| ID do Caso de Teste | Descrição do Caso de Teste | Passos de Execução | Resultado Esperado | Status |
|---|---|---|---|---|---|
| TC-VIEW-001 | Visualizar carrinho vazio. | 1. Abrir a aplicação (com carrinho inicialmente vazio ou após limpar). | A seção do carrinho exibe "Seu carrinho está vazio." e o total é R$ 0.00. | Pendente |
| TC-VIEW-002 | Visualizar carrinho com múltiplos produtos e quantidades. | 1. Adicionar "Produto A" (qtd 2). <br> 2. Adicionar "Produto B" (qtd 1). <br> 3. Adicionar "Produto C" (qtd 3). | O carrinho exibe "Produto A - R$ 10.00 Quantidade: 2", "Produto B - R$ 20.00 Quantidade: 1", "Produto C - R$ 15.00 Quantidade: 3". O total é R$ (2*10 + 1*20 + 3*15) = R$ 85.00. | Pendente |

### Categoria: Persistência Temporária (R06)

| ID do Caso de Teste | Descrição do Caso de Teste | Passos de Execução | Resultado Esperado | Status |
|---|---|---|---|---|---|
| TC-PERSIST-001 | Persistência do carrinho após recarregar a página. | 1. Adicionar "Produto A" e "Produto B" ao carrinho. <br> 2. Recarregar a página (`F5` ou botão de recarregar do navegador). | Os produtos "Produto A" e "Produto B" ainda estão no carrinho com suas respectivas quantidades e o total correto. | Pendente |
| TC-PERSIST-002 | Persistência do carrinho após fechar e reabrir o navegador. | 1. Adicionar "Produto A" e "Produto C" ao carrinho. <br> 2. Fechar o navegador completamente. <br> 3. Abrir o navegador e navegar para `index.html`. | Os produtos "Produto A" e "Produto C" ainda estão no carrinho com suas respectivas quantidades e o total correto. | Pendente |

### Categoria: Limpeza do Carrinho (R07)

| ID do Caso de Teste | Descrição do Caso de Teste | Passos de Execução | Resultado Esperado | Status |
|---|---|---|---|---|---|
| TC-CLEAN-001 | Limpar carrinho com produtos. | 1. Adicionar "Produto A" e "Produto B" ao carrinho. <br> 2. Clicar no botão "Limpar Carrinho". | O carrinho fica vazio. A mensagem "Seu carrinho está vazio." é exibida. O total do carrinho é 0.00. | Pendente |
| TC-CLEAN-002 | Limpar carrinho já vazio. | 1. Abrir a aplicação (com carrinho vazio). <br> 2. Clicar no botão "Limpar Carrinho". | O carrinho permanece vazio. A mensagem "Seu carrinho está vazio." é exibida. O total do carrinho é 0.00. | Pendente |

## Ferramentas de Teste

- **Navegador Web**: Para execução manual dos testes.
- **Ferramentas de Desenvolvedor do Navegador**: Para inspecionar o `LocalStorage` e depurar se necessário.

## Critérios de Aprovação

- Todos os casos de teste devem ter o status "Aprovado".
- Nenhuma falha crítica ou bloqueadora deve ser encontrada.
- A aplicação deve ser responsiva e apresentar um layout utilizável em diferentes dispositivos.

## Relatório de Testes

Os resultados dos testes serão documentados no arquivo `test_report.md`.
