import React, { useState } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.pt-BR.min';

const FormComponent = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [sexo, setSexo] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        document.getElementById('dadosModalBody').innerHTML = `
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Sobrenome:</strong> ${sobrenome}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <p><strong>Sexo:</strong> ${sexo}</p>
            <p><strong>Data de Nascimento:</strong> ${dataNascimento}</p>
        `;

        $('#dadosModal').modal('show');
    };

    return (
        <div className="container mt-5">
            <h2>Cadastro</h2>
            <form id="cadastroForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" className="form-control" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input type="text" className="form-control" id="sobrenome" name="sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" className="form-control" id="telefone" name="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Sexo:</label><br />
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="sexo" id="masculino" value="Masculino" checked={sexo === 'Masculino'} onChange={() => setSexo('Masculino')} required />
                        <label className="form-check-label" htmlFor="masculino">Masculino</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="sexo" id="feminino" value="Feminino" checked={sexo === 'Feminino'} onChange={() => setSexo('Feminino')} required />
                        <label className="form-check-label" htmlFor="feminino">Feminino</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                    <input type="text" className="form-control datepicker" id="dataNascimento" name="dataNascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>

            <div className="modal fade" id="dadosModal" tabIndex="-1" role="dialog" aria-labelledby="dadosModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="dadosModalLabel">Dados do Cadastro</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="dadosModalBody">
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

$(document).ready(function () {
    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR',
        autoclose: true
    });
});

export default FormComponent;