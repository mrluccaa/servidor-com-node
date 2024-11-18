const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


let empresas = [];


function validarFormulario(dados) {
  const erros = [];
  if (!dados.cnpj) erros.push('CNPJ é obrigatório.');
  if (!dados.razaoSocial) erros.push('Razão Social ou Nome do Fornecedor é obrigatório.');
  if (!dados.nomeFantasia) erros.push('Nome Fantasia é obrigatório.');
  if (!dados.endereco) erros.push('Endereço é obrigatório.');
  if (!dados.cidade) erros.push('Cidade é obrigatória.');
  if (!dados.uf) erros.push('UF é obrigatório.');
  if (!dados.cep) erros.push('CEP é obrigatório.');
  if (!dados.email) erros.push('Email é obrigatório.');
  if (!dados.telefone) erros.push('Telefone é obrigatório.');
  return erros;
}


app.get('/', (req, res) => {
  let listaEmpresasHTML = '<h2>Empresas cadastradas:</h2><ul>';
  empresas.forEach((empresa, index) => {
    listaEmpresasHTML += `<li>${index + 1}. ${empresa.razaoSocial} - ${empresa.cnpj}</li>`;
  });
  listaEmpresasHTML += '</ul>';

  res.send(`
    <h1>Cadastro de Empresas</h1>
    <form method="POST" action="/cadastrar">
      <label>CNPJ:</label><br>
      <input type="text" name="cnpj" /><br>
      <label>Razão Social ou Nome do Fornecedor:</label><br>
      <input type="text" name="razaoSocial" /><br>
      <label>Nome Fantasia:</label><br>
      <input type="text" name="nomeFantasia" /><br>
      <label>Endereço:</label><br>
      <input type="text" name="endereco" /><br>
      <label>Cidade:</label><br>
      <input type="text" name="cidade" /><br>
      <label>UF:</label><br>
      <input type="text" name="uf" maxlength="2" /><br>
      <label>CEP:</label><br>
      <input type="text" name="cep" /><br>
      <label>Email:</label><br>
      <input type="email" name="email" /><br>
      <label>Telefone:</label><br>
      <input type="text" name="telefone" /><br><br>
      <button type="submit">Cadastrar</button>
    </form>
    ${listaEmpresasHTML}
  `);
});

// Rota para processar o cadastro
app.post('/cadastrar', (req, res) => {
  const dados = req.body;
  const erros = validarFormulario(dados);

  if (erros.length > 0) {
    res.send(`
      <h1>Erros de Validação</h1>
      <ul>
        ${erros.map(erro => `<li>${erro}</li>`).join('')}
      </ul>
      <a href="/">Voltar</a>
    `);
  } else {
    empresas.push(dados);
    res.redirect('/');
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
