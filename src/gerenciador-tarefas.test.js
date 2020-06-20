import React from 'react';
import ReactDOM from 'react-dom';
import GerenciadorTarefas from './gerenciador-tarefas'; 

describe('Teste do componente de listagem de tarefas', () =>{
     
    
    it('deve renderizar o componente sem erros', () => {
         const div = document.createElement('div');
         ReactDOM.render(<GerenciadorTarefas />, div);
         ReactDOM.unmountComponentAtNode(div);
     });

     
});