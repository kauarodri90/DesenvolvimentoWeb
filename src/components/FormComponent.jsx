import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormComponent = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [sexo, setSexo] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDadosSubmetidos({ nome, sobrenome, email, telefone, sexo, dataNascimento });
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sobrenome">Sobrenome:</label>
          <input
            type="text"
            className="form-control"
            id="sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            className="form-control"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Sexo:</label><br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="sexo"
              id="masculino"
              value="Masculino"
              checked={sexo === 'Masculino'}
              onChange={() => setSexo('Masculino')}
              required
            />
            <label className="form-check-label" htmlFor="masculino">Masculino</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="sexo"
              id="feminino"
              value="Feminino"
              checked={sexo === 'Feminino'}
              onChange={() => setSexo('Feminino')}
              required
            />
            <label className="form-check-label" htmlFor="feminino">Feminino</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="text"
            className="form-control"
            id="dataNascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>

      {dadosSubmetidos && (
        <div className="mt-4" data-testid="dados-cadastrados">
          <h4>Dados do Cadastro</h4>
          <p><strong>Nome:</strong> {dadosSubmetidos.nome}</p>
          <p><strong>Sobrenome:</strong> {dadosSubmetidos.sobrenome}</p>
          <p><strong>E-mail:</strong> {dadosSubmetidos.email}</p>
          <p><strong>Telefone:</strong> {dadosSubmetidos.telefone}</p>
          <p><strong>Sexo:</strong> {dadosSubmetidos.sexo}</p>
          <p><strong>Data de Nascimento:</strong> {dadosSubmetidos.dataNascimento}</p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;