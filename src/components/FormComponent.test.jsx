import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormComponent from './FormComponent';

describe('FormComponent', () => {
  test('preenche e exibe os dados submetidos', () => {
    render(<FormComponent/>);

    fireEvent.change(screen.getAllByLabelText(/nome/i)[0], { target: { value: 'Kauã' } });
    fireEvent.change(screen.getAllByLabelText(/sobrenome/i)[0], { target: { value: 'Azevedo' } });
    fireEvent.change(screen.getAllByLabelText(/e-mail/i)[0], { target: { value: 'kaua@email.com' } });
    fireEvent.change(screen.getAllByLabelText(/telefone/i)[0], { target: { value: '64999101001' } });
    fireEvent.click(screen.getByLabelText(/masculino/i));
    fireEvent.change(screen.getByLabelText(/data de nascimento/i), { target: { value: '21/06/2000' } });

    fireEvent.click(screen.getByRole('button', { name: /cadastrar/i }));

    const resultado = screen.getByTestId('dados-cadastrados');
    expect(resultado).toHaveTextContent('Kauã');
    expect(resultado).toHaveTextContent('Azevedo');
    expect(resultado).toHaveTextContent('kaua@email.com');
    expect(resultado).toHaveTextContent('64999101001');
    expect(resultado).toHaveTextContent('Masculino');
    expect(resultado).toHaveTextContent('21/06/2000');
  });
});
