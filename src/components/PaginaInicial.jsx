import React from 'react';
import { Link } from 'react-router-dom';

function PaginaInicial() {
  return (
    <div className="container mt-5">
      <h1>Bem-vindo!</h1>
      <Link to="/cadastro" className="btn btn-primary mr-2">Cadastro</Link>
      <Link to="/usuarios" className="btn btn-secondary">Lista de Usuários</Link>
    </div>
  );
}

export default PaginaInicial;