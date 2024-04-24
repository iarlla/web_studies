class Servicos{
    constructor(nome,tipo,valor){
        this.nome = nome;
        this.tipo = tipo;
        this.valor = valor;
        this.adicionaVetor(nome,tipo,valor);
    }

    adicionaVetor(nome,tipo,valor){
        vetorNomes.push(nome);
        vetorTipos.push(tipo);
        vetorValores.push(valor);
    }
    
    somarValor(){
        let resultado = 0;
        for(let i=0; i<vetorValores.length; i++){
            resultado+=vetorValores[i];
        }
        return resultado;
    }
}

let vetorNomes = [];
let vetorTipos = [];
let vetorValores = [];


document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const valor = parseFloat(document.getElementById('valorServico').value);

    if (isNaN(valor)) {
        document.getElementById('detalhes').innerHTML = "<h4>Por favor, insira números válidos no campo 'Valor do serviço'.</h4>";
        return;
    }

    const nomeCliente = document.getElementById('nomeCliente').value;
    const tipoServico = document.getElementById('tipoServico').value;
    
    const services = new Servicos(nomeCliente, tipoServico, valor);
    
    document.getElementById('detalhes').innerHTML += `
        <ul>
            <li>Nome do cliente: ${nomeCliente}</li>
            <li>Tipo do serviço: ${tipoServico}</li>
            <li>Valor do serviço: ${valor}</li>
            <hr>
            <li>Valor total de vendas: ${services.somarValor()}</li>
            </ul>
        <hr>
        <br>`;
});
