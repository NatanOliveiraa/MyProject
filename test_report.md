# Relatório de Testes - Carrinho de Compras SPA

## Data de Execução

22/08/2025

## Versão da Aplicação Testada

1.0.0

## Ambiente de Teste

- **Sistema Operacional**: [Seu Sistema Operacional, ex: Windows 10, macOS Ventura]
- **Navegador**: [Nome e Versão do Navegador, ex: Google Chrome 115.0.5790.171]
- **Resolução da Tela**: [Resolução da tela utilizada, ex: 1920x1080]

## Sumário dos Testes

- **Total de Casos de Teste**: 13
- **Casos de Teste Aprovados**: 0
- **Casos de Teste Reprovados**: 0
- **Casos de Teste Bloqueados**: 0

## Resultados Detalhados dos Casos de Teste

### Categoria: Adição de Produtos (R01)

| ID do Caso de Teste | Descrição do Caso de Teste | Resultado Esperado | Resultado Obtido | Status | Observações |
|---|---|---|---|---|---|
| TC-ADD-001 | Adicionar um produto ao carrinho. | O "Produto A" aparece no carrinho com quantidade 1. O total do carrinho é atualizado. | | Pendente | |
| TC-ADD-002 | Adicionar o mesmo produto novamente. | A quantidade do "Produto A" no carrinho é atualizada para 2. O total do carrinho é atualizado. | | Pendente | |
| TC-ADD-003 | Adicionar produtos diferentes. | "Produto A" e "Produto B" aparecem no carrinho, ambos com quantidade 1. O total do carrinho é atualizado corretamente. | | Pendente | |

### Categoria: Remoção de Produtos (R02)

| ID do Caso de Teste | Descrição do Caso de Teste | Resultado Esperado | Resultado Obtido | Status | Observações |
|---|---|---|---|---|---|
| TC-REM-001 | Remover um produto do carrinho. | O "Produto A" é removido do carrinho. O total do carrinho é atualizado. | | Pendente | |
| TC-REM-002 | Remover o único produto do carrinho. | O carrinho fica vazio. A mensagem "Seu carrinho está vazio." é exibida. O total do carrinho é 0.00. | | Pendente | |

### Categoria: Alteração de Quantidade (R03)

| ID do Caso de Teste | Descrição do Caso de Teste | Resultado Esperado | Resultado Obtido | Status | Observações |
|---|---|---|---|---|---|
| TC-QTY-001 | Aumentar a quantidade de um produto. | A quantidade do "Produto A" no carrinho aumenta para 2. O total do carrinho é atualizado. | | Pendente | |
| TC-QTY-002 | Diminuir a quantidade de um produto. | A quantidade do "Produto B" no carrinho diminui para 1. O total do carrinho é atualizado. | | Pendente | |
| TC-QTY-003 | Diminuir a quantidade até zero (remoção automática). | O "Produto C" é removido do carrinho. O total do carrinho é atualizado. | | Pendente | |

### Categoria: Visualização e Totalizador (R04, R05)

| ID do Caso de Teste | Descrição do Caso de Teste | Resultado Esperado | Resultado Obtido | Status | Observações |
|---|---|---|---|---|---|
| TC-VIEW-001 | Visualizar carrinho vazio. | A seção do carrinho exibe "Seu carrinho está vazio." e o total é R$ 0.00. | | Pendente | |
| TC-VIEW-002 | Visualizar carrinho com múltiplos produtos e quantidades. | O carrinho exibe "Produto A - R$ 10.00 Quantidade: 2", "Produto B - R$ 20.00 Quantidade: 1", "Produto C - R$ 15.00 Quantidade: 3". O total é R$ (2*10 + 1*20 + 3*15) = R$ 85.00. | | Pendente | |

### Categoria: Persistência Temporária (R06)

| ID do Caso de Teste | Descrição do Caso de Teste | Resultado Esperado | Resultado Obtido | Status | Observações |
|---|---|---|---|---|---|
| TC-PERSIST-001 | Persistência do carrinho após recarregar a página. | Os produtos "Produto A" e "Produto B" ainda estão no carrinho com suas respectivas quantidades e o total correto. | | Pendente | |
| TC-PERSIST-002 | Persistência do carrinho após fechar e reabrir o navegador. | Os produtos "Produto A" e "Produto C" ainda estão no carrinho com suas respectivas quantidades e o total correto. | | Pendente | |

### Categoria: Limpeza do Carrinho (R07)

| ID do Caso de Teste | Descrição do Caso de Teste | Resultado Esperado | Resultado Obtido | Status | Observações |
|---|---|---|---|---|---|
| TC-CLEAN-001 | Limpar carrinho com produtos. | O carrinho fica vazio. A mensagem "Seu carrinho está vazio." é exibida. O total do carrinho é 0.00. | | Pendente | |
| TC-CLEAN-002 | Limpar carrinho já vazio. | O carrinho permanece vazio. A mensagem "Seu carrinho está vazio." é exibida. O total do carrinho é 0.00. | | Pendente | |

## Defeitos Encontrados

| ID do Defeito | Descrição do Defeito | Gravidade | Status |
|---|---|---|---|
| | | | |

## Recomendações

- [Quaisquer recomendações baseadas nos resultados dos testes]

## Conclusão

[Breve conclusão sobre o estado da aplicação após os testes]
