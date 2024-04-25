// variáveis do formulário
let res = document.getElementById("res");
let nomeVendedor = document.getElementById("nomeVendedor");
let valorVenda = document.getElementById("valorVenda");

// arrays
let vendedor = [];
let venda = [];
let desconto = [];

function cadastrar() { //btn cadastrar

    if (nomeVendedor.value == "" || valorVenda.value == "") {
        window.alert("Erro!!! Nome do vendedor ou Valor não foram preencidos");
    } else {
    desconto.push(Number(valorVenda.value) * 0.1); //pucha o valor para a variável
    vendedor.push(nomeVendedor.value);
    venda.push(Number(valorVenda.value));
    res.innerHTML = ""; // zera a tabela para que não haja itens duplicados
    res.innerHTML +="<p>Id</p><p>Nome Vendedor</p><p>Valor</p> <p>Desconto</p>"; // cabeçalho
    for(i = 0; i < vendedor.length; i++) {// estrutura que mostra a tabela
        let o = i + 1;
        res.innerHTML += `<p>${o}</p><p>${vendedor[i]}</p><p>R$${venda[i].toFixed(2)}</p><p>R$${desconto[i].toFixed(2)}</p>`;
    }
    nomeVendedor.value = '';
    valorVenda.value = ''; 
    event.preventDefault() // essa função faz com que o o botão não haja naturalmente, seu evento padrão não acontece, ou seja, era pra ele mandar para outra página, e para que isso não aconteça, usamos essa função do js
    }

    
}

function limpar() {// zera todas as variáveis
    res.innerHTML = "";
    vendedor = [];
    venda = [];
    desconto = [];

    event.preventDefault();
}

function removerAnterior() {
    desconto.pop();
    
    vendedor.pop();// função usada para remover o ultimo valor dentro de um array
    venda.pop();
    res.innerHTML = "";
    res.innerHTML +="<p>Id</p><p>Nome Vendedor</p><p>Valor</p> <p>Desconto</p>";
    for(i = 0; i < vendedor.length; i++) {
        let o = i + 1; // para mostrar a pessoa com o indice 0 mostrando o id
        res.innerHTML += `<p>${o}</p><p>${vendedor[i]}</p><p>R$${venda[i].toFixed(2)}</p><p>R$${desconto[i].toFixed(2)}</p>`; // toFixed(2) --> mostra somente duas casas decimais após a virgula
    }

    event.preventDefault();

}