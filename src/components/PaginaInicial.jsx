import React from 'react';
import { Link } from 'react-router-dom';

function PaginaInicial({ idioma }) {
  const textos = {
    pt: { titulo: "Página Inicial", cadastrar: "Cadastrar Usuário", listar: "Lista de Usuários" },
    en: { titulo: "Home", cadastrar: "Register User", listar: "User List" }
  };

  return (
    <div className="container mt-5 text-center">
      <h1>{textos[idioma].titulo}</h1>
      <Link to="/cadastro" className="btn btn-primary m-2">{textos[idioma].cadastrar}</Link>
      <Link to="/usuarios" className="btn btn-secondary m-2">{textos[idioma].listar}</Link>
    </div>
  );
}

export default PaginaInicial;