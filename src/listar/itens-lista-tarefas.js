import React from 'react';
import PropTypes from 'prop-types';
// import {  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';

function ItensListaTarefas(props) {

    function marcarConcluida(tarefa){
        return tarefa.concluida ? 'line-throught' : 'none';
    }

    return(
        
        props.tarefas.map(tarefa => 
    
            <tr key={tarefa.id} data-testid="tarefa">
                <td width="75%" data-testid="nome-tarefa" style={{ textDecoration: marcarConcluida(tarefa) }}>{tarefa.nome}</td>
            </tr>
            <td className="text-right">
                <A href={"/atualizar/" + tarefa.id} className={tarefa.concluida ? 'hidden' : 'btn btn-warning btn-sm'}>
                    <FontAwesomeIcon icon={faEdit} /> 
                </A>
            </td>
            
        );
    );
    
}

ItensListaTarefas.PropTypes = {
    tarefas: PropTypes.array.isRequired,
    recarregarTarefas: PropTypes.func.isRequired
};

export default ItensListaTarefas;