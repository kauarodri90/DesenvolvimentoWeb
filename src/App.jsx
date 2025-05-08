import React, { useState, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './components/Cadastro';
import PaginaInicial from './components/PaginaInicial';
import Sucesso from './components/Sucesso';
import ListaUsuarios from './components/ListaUsuarios';
import Acessibilidade from './components/Acessibilidade';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [tema, setTema] = useState(localStorage.getItem('tema') || 'claro');
  const [idioma, setIdioma] = useState(document.cookie.replace(/(?:(?:^|.*;\s*)idioma\s*\=\s*([^;]*).*$)|^.*$/, "$1") || 'pt');

  const adicionarUsuario = useCallback((novoUsuario) => {
    setUsuarios(prev => [...prev, novoUsuario]);
  }, []);

  const usuariosMemo = useMemo(() => usuarios, [usuarios]);

  return (
    <Router>
      <Acessibilidade onTemaChange={setTema} onIdiomaChange={setIdioma} />
      <Routes>
        <Route path="/" element={<PaginaInicial idioma={idioma} />} />
        <Route path="/" element={<Cadastro adicionarUsuario={adicionarUsuario} idioma={idioma} />} />
        <Route path="/cadastro" element={<Cadastro adicionarUsuario={adicionarUsuario} idioma={idioma} />} />
        <Route path="/usuarios" element={<ListaUsuarios usuarios={usuariosMemo} idioma={idioma} />} />
        <Route path="/sucesso" element={<Sucesso idioma={idioma} />} />
        <Route path="*" element={<div style={{ textAlign: 'center', marginTop: '2rem' }}>Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default App;