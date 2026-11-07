

Aluno(a): Renê da Silva Soares - 202522010027

# Minha Loja — GameZone

Programa em JavaScript (Node.js) que simula o estoque de uma loja de games. Para executar: `node loja.js`.

## Organização do código

O `loja.js` tem três partes: os **dados**, as **funções** (uma para cada tarefa) e o **programa principal**, que chama as funções e mostra os resultados no console.

## Dados

O nome da loja fica na constante `nomeLoja`. Os produtos ficam no array `produtos`, em que cada item é um objeto com `nome`, `categoria`, `preco`, `quantidade` (em estoque) e `vendidos`. Usei objetos porque cada produto precisa guardar vários dados juntos.

## Funções

### listarProdutos(lista)
Usei um `for` que percorre o array da posição 0 até o último item e imprime cada produto com template string. Como o índice começa em 0, mostrei `i + 1` para a numeração começar em 1.

### formatarNome(texto)
Padroniza o nome em três passos: `trim()` remove os espaços das pontas, `charAt(0).toUpperCase()` deixa a primeira letra maiúscula e `slice(1).toLowerCase()` deixa o resto minúsculo. Depois junto as duas partes com `+`.

```js
return limpo.charAt(0).toUpperCase() + limpo.slice(1).toLowerCase();
```

Ex.: `"   bORRACHA branca  "` vira `"Borracha branca"`. Ela fica declarada antes de `cadastrarProduto`, porque é usada lá.

### cadastrarProduto(lista, nome, categoria, preco, quantidade)
Monta um objeto novo com os dados recebidos. O nome passa por `formatarNome` e `vendidos` começa em 0, porque o produto acabou de ser cadastrado. Depois, `push` adiciona o objeto no final do array e a função retorna o novo total de produtos (`lista.length`).

### calcularValorEstoque(lista)
Cria uma variável acumuladora `total` começando em 0. Em cada volta do `for`, multiplica o preço pela quantidade em estoque e soma em `total`. No fim, retorna o total.

### buscarProduto(lista, termo)
Converte o termo e o nome de cada produto para minúsculas, assim a busca não diferencia maiúsculas de minúsculas. Usei `includes`, que também aceita parte do nome. Quando encontra, o `return` já devolve o produto. Se o laço termina sem achar nada, retorna `null`.

### produtosEmFalta(lista, minimo)
Cria um array vazio e percorre a lista. Todo produto com quantidade menor que o mínimo é adicionado a esse array com `push`. A função retorna o array novo e não altera o original.

### aplicarDesconto(lista, categoria, percentual)
Percorre a lista e, nos produtos da categoria informada, calcula o desconto e atualiza o preço no próprio objeto:

```js
lista[i].preco = lista[i].preco - (lista[i].preco * percentual / 100);
```

Um contador `alterados` aumenta a cada produto modificado e é retornado no fim.

### registrarVenda(lista, nome, quantidade)
Reaproveita `buscarProduto` para localizar o produto. Se ele não existir ou o estoque for menor que a quantidade pedida, retorna `false` e nada é alterado. Se estiver tudo certo, diminui `quantidade`, aumenta `vendidos` e retorna `true`.

### converterParaJSON(lista) e lerJSON(texto)
`JSON.stringify` transforma o array de objetos em texto (string), que pode ser salvo ou enviado. `JSON.parse` faz o caminho contrário, transformando o texto de volta em array.

### gerarRelatorio(nome, lista)
Reaproveita `calcularValorEstoque` e `produtosEmFalta` (com mínimo 5). Imprime o nome da loja em maiúsculas, a quantidade de produtos, o valor do estoque e, com um `for`, cada produto com estoque baixo.

## Programa principal

No final do arquivo, chamo as funções na ordem das tarefas (2 a 11), com um título no console antes de cada uma. Uso os valores retornados para decidir as mensagens, por exemplo: se `buscarProduto` retorna `null`, mostra "Produto não encontrado"; se `registrarVenda` retorna `false`, mostra que a venda não foi realizada.
