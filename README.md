# lsw-projeto1-renesoares
# Minha Loja - GameZone

Aluno(a): Renê da Silva Soares - 202522010027

Como executar: node loja.js

Funcionalidades:
- listarProdutos(lista): exibe cada produto numerado, com nome, categoria, preço, quantidade em estoque e vendidos.
- cadastrarProduto(lista, nome, categoria, preco, quantidade): cria um produto novo (com vendidos igual a 0 e nome formatado), adiciona ao array e retorna a nova quantidade de produtos.
- calcularValorEstoque(lista): retorna a soma de preço × quantidade de todos os produtos.
- buscarProduto(lista, termo): retorna o primeiro produto cujo nome contém o termo (sem diferenciar maiúsculas de minúsculas) ou null se não encontrar.
- produtosEmFalta(lista, minimo): retorna um novo array com os produtos de quantidade menor que o mínimo.
- aplicarDesconto(lista, categoria, percentual): aplica o desconto nos produtos da categoria e retorna quantos foram alterados.
- registrarVenda(lista, nome, quantidade): diminui o estoque e aumenta os vendidos; retorna true se a venda ocorreu e false se o produto não existe ou o estoque é insuficiente.
- formatarNome(texto): remove espaços das pontas e deixa só a primeira letra maiúscula.
- converterParaJSON(lista): converte o array de produtos em texto JSON.
- lerJSON(texto): converte o texto JSON de volta em array.
- gerarRelatorio(nome, lista): exibe o relatório da loja com total de produtos, valor do estoque e produtos com estoque baixo.
