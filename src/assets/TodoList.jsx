import React, { useState } from "react";
import './TodoList.css'
import Icone from './icon.png'

function TodoList() {

    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function adicionaItem(form) {
        form.preventDefault()
        if (!novoItem) {
            return;
        }
        setLista([...lista, { text: novoItem, iscompleted: false }])
        setNovoItem("")
        document.getElementById('input-entrada').focus()
    }

    function clicou(index) {
        const listaAux = [...lista]
        listaAux[index].iscompleted = !listaAux[index].iscompleted;
        setLista(listaAux)
    }

    function deleta(index) {
        const listaAux = [...lista]
        listaAux.splice(index, 1)
        setLista(listaAux)
    }

    function deletaTudo() {
        setLista([])
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input id="input-entrada" type="text" value={novoItem} onChange={(e) => { setNovoItem(e.target.value) }} placeholder="Adicione uma tarefa..."></input>
                <button className="add" type="submit">Add</button>
            </form>
            <div className="listaTarefas">
                <div>
                    {
                        lista.length < 1
                            ?
                            <img src={Icone} />
                            :
                            lista.map((item, index) => (
                                <div key={index} className={item.iscompleted ? "item completo" : "item"}>
                                    <span onClick={() => { clicou(index) }}>{item.text}</span>
                                    <button onClick={() => { deleta(index) }} className="del">Deletar</button>
                                </div>
                            ))
                    }
                    {
                        lista.length > 0 &&
                        <button onClick={() => { deletaTudo() }} className="deleteAll">Deletar Todas</button>
                    }

                </div>
            </div>
        </div>
    )
}

export default TodoList