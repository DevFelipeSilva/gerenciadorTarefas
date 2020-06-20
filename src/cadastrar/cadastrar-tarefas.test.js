import React from 'react';
import ReactDOM from 'react-dom';
import CadastrarTarefas from './cadastrar-tarefas';


describe('Teste do componente de casdastro de tarefas', () => {
    
    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CadastrarTarefas id={1} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

}); 