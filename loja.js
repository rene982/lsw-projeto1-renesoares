// ===== 1. DADOS =====
// Tarefa 1 — nome da loja e array de produtos
const nomeLoja = "GameZone";

const produtos = [
  { nome: "Controle", categoria: "acessórios", preco: 150, quantidade: 8, vendidos: 5 },
  { nome: "Headset", categoria: "acessórios", preco: 200, quantidade: 3, vendidos: 4 },
  { nome: "Mouse gamer", categoria: "acessórios", preco: 90, quantidade: 10, vendidos: 6 },
  { nome: "Jogo FIFA", categoria: "jogos", preco: 250, quantidade: 4, vendidos: 12 },
  { nome: "Jogo Zelda", categoria: "jogos", preco: 300, quantidade: 6, vendidos: 7 },
  { nome: "Cartão presente", categoria: "cartões", preco: 50, quantidade: 20, vendidos: 9 }
];

// ===== 2. FUNÇÕES =====

// Tarefa 2 — listar os produtos
function listarProdutos(lista) {
  for (let i = 0; i < lista.length; i++) {
    const p = lista[i];
    console.log(`${i + 1}. ${p.nome} | ${p.categoria} | R$ ${p.preco} | ${p.quantidade} un. | ${p.vendidos} vendidos`);
  }
}

// Tarefa 9 — padronizar nomes (definida antes de ser usada na Tarefa 3)
function formatarNome(texto) {
  const limpo = texto.trim();
  return limpo.charAt(0).toUpperCase() + limpo.slice(1).toLowerCase();
}

// Tarefa 3 — cadastrar um produto (já usando formatarNome, conforme a Tarefa 9)
function cadastrarProduto(lista, nome, categoria, preco, quantidade) {
  const novo = {
    nome: formatarNome(nome),
    categoria: categoria,
    preco: preco,
    quantidade: quantidade,
    vendidos: 0
  };
  lista.push(novo);
  return lista.length;
}

// Tarefa 4 — valor total do estoque
function calcularValorEstoque(lista) {
  let total = 0;
  for (let i = 0; i < lista.length; i++) {
    total += lista[i].preco * lista[i].quantidade;
  }
  return total;
}

// Tarefa 5 — buscar um produto pelo nome (sem diferenciar maiúsculas/minúsculas)
function buscarProduto(lista, termo) {
  const busca = termo.toLowerCase();
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].nome.toLowerCase().includes(busca)) {
      return lista[i];
    }
  }
  return null;
}

// Tarefa 6 — produtos com quantidade menor que o mínimo
function produtosEmFalta(lista, minimo) {
  const emFalta = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].quantidade < minimo) {
      emFalta.push(lista[i]);
    }
  }
  return emFalta;
}

// Tarefa 7 — aplicar desconto em uma categoria
function aplicarDesconto(lista, categoria, percentual) {
  let alterados = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].categoria === categoria) {
      lista[i].preco = lista[i].preco - (lista[i].preco * percentual / 100);
      alterados++;
    }
  }
  return alterados;
}

// Tarefa 8 — registrar uma venda (usa buscarProduto)
function registrarVenda(lista, nome, quantidade) {
  const produto = buscarProduto(lista, nome);
  if (produto === null || produto.quantidade < quantidade) {
    return false;
  }
  produto.quantidade -= quantidade;
  produto.vendidos += quantidade;
  return true;
}

// Tarefa 10 — salvar e recuperar em JSON
function converterParaJSON(lista) {
  return JSON.stringify(lista);
}

function lerJSON(texto) {
  return JSON.parse(texto);
}

// Tarefa 11 — relatório final (usa calcularValorEstoque e produtosEmFalta)
function gerarRelatorio(nome, lista) {
  const valor = calcularValorEstoque(lista);
  const baixo = produtosEmFalta(lista, 5);

  console.log(`===== RELATÓRIO: ${nome.toUpperCase()} =====`);
  console.log(`Produtos cadastrados: ${lista.length}`);
  console.log(`Valor total em estoque: R$ ${valor}`);
  console.log(`Produtos com estoque baixo: ${baixo.length}`);
  for (let i = 0; i < baixo.length; i++) {
    console.log(`- ${baixo[i].nome} (${baixo[i].quantidade} un.)`);
  }
}

// ===== 3. PROGRAMA PRINCIPAL =====

console.log("--- Tarefa 2: listar ---");
listarProdutos(produtos);

console.log("--- Tarefa 3: cadastrar ---");
const total = cadastrarProduto(produtos, "  teclado MECÂNICO ", "acessórios", 180, 2);
console.log(`Produto cadastrado! Agora a loja tem ${total} produtos.`);

console.log("--- Tarefa 4: valor do estoque ---");
console.log(`Valor do estoque: R$ ${calcularValorEstoque(produtos)}`);

console.log("--- Tarefa 5: buscar ---");
const achado = buscarProduto(produtos, "HEADSET");
if (achado !== null) {
  console.log(`Encontrado: ${achado.nome} - R$ ${achado.preco}`);
}
const naoAchado = buscarProduto(produtos, "Monitor");
if (naoAchado === null) {
  console.log("Produto não encontrado.");
}

console.log("--- Tarefa 6: em falta ---");
const emFalta = produtosEmFalta(produtos, 5);
console.log(`Produtos com menos de 5 unidades: ${emFalta.length}`);

console.log("--- Tarefa 7: desconto ---");
const alterados = aplicarDesconto(produtos, "acessórios", 10);
console.log(`${alterados} produtos receberam desconto.`);
const headset = buscarProduto(produtos, "Headset");
console.log(`Novo preço do headset: R$ ${headset.preco}`);

console.log("--- Tarefa 8: registrar venda ---");
if (registrarVenda(produtos, "Mouse gamer", 3)) {
  const mouse = buscarProduto(produtos, "Mouse gamer");
  console.log(`Venda realizada! ${mouse.nome}: ${mouse.quantidade} un. em estoque, ${mouse.vendidos} vendidos.`);
}
if (!registrarVenda(produtos, "Mouse gamer", 100)) {
  console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
}

console.log("--- Tarefa 9: formatar nome ---");
console.log(formatarNome("   bORRACHA branca  "));

console.log("--- Tarefa 10: JSON ---");
const texto = converterParaJSON(produtos);
console.log(typeof texto);
const recuperados = lerJSON(texto);
console.log(`Itens recuperados: ${recuperados.length} | Primeiro: ${recuperados[0].nome}`);

console.log("--- Tarefa 11: relatório ---");
gerarRelatorio(nomeLoja, produtos);
