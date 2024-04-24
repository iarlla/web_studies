const express = require('express');
const app = express();
const path = require('path');

// Configurando o Express para usar arquivos estáticos (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a soma
app.get('/PetShop', (req, res) => {

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
    

});

// Iniciando o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));