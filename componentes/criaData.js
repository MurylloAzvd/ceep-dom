import { formatDate, Tarefa } from './criaTarefa.js'

export const criaData = data => {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const dataTopo = document.createElement('li')
    const conteudo = `<p class="content-data">${formatDate(data)}</p>`

    dataTopo.innerHTML = conteudo

    tarefas.forEach((tarefa, id) => {
        if ((new Date(tarefa.data)).toDateString() === data.toDateString()) dataTopo.appendChild(Tarefa(tarefa, id))
    })

    return dataTopo
}