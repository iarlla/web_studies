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

});

// Iniciando o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));