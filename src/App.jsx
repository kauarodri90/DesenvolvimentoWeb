import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicial from './components/PaginaInicial';
import Cadastro from './components/Cadastro';
import Sucesso from './components/Sucesso';
import ListaUsuarios from './components/ListaUsuarios';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const adicionarUsuario = (novoUsuario) => {
    setUsuarios([...usuarios, novoUsuario]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/cadastro" element={<Cadastro adicionarUsuario={adicionarUsuario} />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/usuarios" element={<ListaUsuarios usuarios={usuarios} />} />
      </Routes>
    </Router>
  );
}

export default App;