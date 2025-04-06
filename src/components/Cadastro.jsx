import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cadastro({ adicionarUsuario }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nome || !email || !senha || !confirmarSenha) {
      setErro('Todos os campos são obrigatórios.');
    } else if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
    } else {
      adicionarUsuario({ nome, email });
      navigate('/sucesso');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro de Usuário</h2>
      {erro && <div className="alert alert-danger">{erro}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input type="password" className="form-control" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Confirmar Senha:</label>
          <input type="password" className="form-control" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;