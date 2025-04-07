import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicial from './components/PaginaInicial';
import Cadastro from './components/Cadastro';
import Sucesso from './components/Sucesso';
import ListaUsuarios from './components/ListaUsuarios';
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";
import UseLayoutEffect from "./components/UseLayoutEffect";
import Hooks from './components/Hooks';

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
        <Route path="/hooks" element={<Hooks/>} />
      </Routes>
    </Router>
  );
}

export default App;