import React from 'react';
import { Link } from 'react-router-dom';

function PaginaInicial() {
  return (
    <div className="container mt-5">
      <h1>Bem-vindo!</h1>
      <div className="btn-group mt-3 d-flex flex-column align-items-start gap-2">
        <Link to="/cadastro">
          <button className="btn btn-primary">Cadastro</button>
        </Link>
        <Link to="/usuarios">
          <button className="btn btn-secondary">Lista de Usuários</button>
        </Link>
        <Link to="/hooks">
          <button className="btn btn-success">Verificar Hooks</button>
        </Link>
      </div>
    </div>
  );
}

export default PaginaInicial;