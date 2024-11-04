const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Servir o formulário HTML
app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <input type="text" name="name" placeholder="Nome">
            <input type="email" name="email" placeholder="Email">
            <button type="submit">Enviar</button>
        </form>
    `);
});

// Processar os dados do formulário
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`Dados recebidos: Nome - ${name}, Email - ${email}`);
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});