import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

function ListaUsuarios({ usuarios, idioma }) {
  const textos = {
  pt: { titulo: 'Lista de Usuários', nome: 'Nome', email: 'Email', voltar: 'Voltar' },
  en: { titulo: 'User List', nome: 'Name', email: 'Email', voltar: 'Back' }
};

  const usuariosMemo = useMemo(() => usuarios, [usuarios]);

  return (
    <div className="container mt-5">
      <h2>{textos[idioma].titulo}</h2>
      <table className="table">
        <thead>
          <tr>
            <th>{textos[idioma].nome}</th>
            <th>{textos[idioma].email}</th>
          </tr>
        </thead>
        <tbody>
          {usuariosMemo.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
      <Link to="/" className="btn btn-outline-secondary mt-3">{textos[idioma].voltar}</Link>
    </div>
  );
}

export default ListaUsuarios;