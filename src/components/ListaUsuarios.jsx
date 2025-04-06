import React from 'react';

function ListaUsuarios({ usuarios }) {
  return (
    <div className="container mt-5">
      <h2>Lista de Usuários</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaUsuarios;