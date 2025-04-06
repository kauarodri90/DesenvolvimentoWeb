import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Tela2() {
  const { parametro } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const valorQuery = query.get('query');

  return (
    <div>
      <h1>Tela 2</h1>
      <p>Parâmetro: {parametro}</p>
      <p>Query: {valorQuery}</p>
    </div>
  );
}

export default Tela2;