import React, { useEffect, useState, useCallback } from 'react';

const Acessibilidade = ({ onTemaChange, onIdiomaChange }) => {
  const [tema, setTema] = useState(localStorage.getItem('tema') || 'claro');
  const [idioma, setIdioma] = useState(
    document.cookie.replace(/(?:(?:^|.*;\s*)idioma\s*=\s*([^;]*).*$)|^.*$/, "$1") || 'pt'
  );

  const mudarTema = useCallback(() => {
    const novoTema = tema === 'claro' ? 'escuro' : 'claro';
    setTema(novoTema);
    localStorage.setItem('tema', novoTema);
    document.body.classList.remove('claro', 'escuro');
    document.body.classList.add(novoTema);
    onTemaChange(novoTema);
  }, [tema, onTemaChange]);

  const mudarIdioma = useCallback(() => {
    const novoIdioma = idioma === 'pt' ? 'en' : 'pt';
    setIdioma(novoIdioma);
    document.cookie = `idioma=${novoIdioma}`;
    onIdiomaChange(novoIdioma);
  }, [idioma, onIdiomaChange]);

  useEffect(() => {
    document.body.classList.remove('claro', 'escuro');
    document.body.classList.add(tema);
  }, [tema]);

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, padding: '1rem' }}>
      <button onClick={mudarTema}>Tema: {tema}</button>
      <button onClick={mudarIdioma}>Idioma: {idioma.toUpperCase()}</button>
    </div>
  );
};

export default Acessibilidade;
