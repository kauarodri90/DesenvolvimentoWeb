import React, { useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Cadastro({ adicionarUsuario, idioma }) {
  const textos = {
    pt: {
      titulo: 'Cadastro de Usuário',
      campos: { nome: 'Nome', email: 'Email', senha: 'Senha', confirmar: 'Confirmar Senha' },
      erros: {
        obrigatorio: 'Todos os campos são obrigatórios.',
        senhaDiferente: 'As senhas não coincidem.'
      },
      botao: 'Cadastrar',
      voltar: 'Voltar'
    },
    en: {
      titulo: 'User Registration',
      campos: { nome: 'Name', email: 'Email', senha: 'Password', confirmar: 'Confirm Password' },
      erros: {
        obrigatorio: 'All fields are required.',
        senhaDiferente: 'Passwords do not match.'
      },
      botao: 'Register',
      voltar: 'Back'
    }
  };

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if (!nome || !email || !senha || !confirmarSenha) {
      setErro(textos[idioma].erros.obrigatorio);
    } else if (senha !== confirmarSenha) {
      setErro(textos[idioma].erros.senhaDiferente);
    } else {
      adicionarUsuario({ nome, email });
      navigate('/usuarios');
    }
  }, [nome, email, senha, confirmarSenha, adicionarUsuario, navigate, idioma]);

  return (
    <div className="container mt-5">
      <h2>{textos[idioma].titulo}</h2>
      {erro && <div className="alert alert-danger">{erro}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>{textos[idioma].campos.nome}:</label>
          <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="form-group">
          <label>{textos[idioma].campos.email}:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>{textos[idioma].campos.senha}:</label>
          <input type="password" className="form-control" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <div className="form-group">
          <label>{textos[idioma].campos.confirmar}:</label>
          <input type="password" className="form-control" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">{textos[idioma].botao}</button>
        <Link to="/" className="btn btn-outline-secondary ms-2">{textos[idioma].voltar}</Link>
      </form>
    </div>
  );
}

export default Cadastro;
