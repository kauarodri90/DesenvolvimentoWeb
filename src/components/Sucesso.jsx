import React from 'react';
import { Link } from 'react-router-dom';

function Sucesso({ idioma }) {
  const textos = {
    pt: {
      sucesso: 'Cadastro realizado com sucesso!',
      voltar: 'Voltar para a Lista de Usuários'
    },
    en: {
      sucesso: 'Registration completed successfully!',
      voltar: 'Back to User List'
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h1>{textos[idioma].sucesso}</h1>
      <Link to="/usuarios" className="btn btn-primary mt-3">
        {textos[idioma].voltar}
      </Link>
    </div>
  );
}

export default Sucesso;
