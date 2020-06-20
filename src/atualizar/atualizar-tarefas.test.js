import React from 'react';
import ReactDOM from 'react-dom';
import AtualizarTarefas from './atulizar-tarefas';

describe('Teste de componente de atuluzar tarefas', () => {

    it('Deve renderizar o componente atualizar tarefa', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<AtualizarTarefas />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
});