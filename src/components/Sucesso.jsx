import React from 'react';
import { Link } from 'react-router-dom';

function Sucesso() {
  return (
    <div className="container mt-5">
      <h1>Cadastro realizado com sucesso!</h1>
      <Link to="/" className="btn btn-primary">Voltar para a Página Inicial</Link>
    </div>
  );
}

export default Sucesso;