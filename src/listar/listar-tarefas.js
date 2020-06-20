import React from 'react';
import { A } from 'hookrouter';

function ListarTarefas () {
    return (
        <A href="/cadastrar"
            className="btn btn-primary btn-sm">Cadastrar Tarefas</A>
    );
}

export default ListarTarefas;