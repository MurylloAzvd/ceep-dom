import { carregaTarefa } from "./carregaTarefa.js"
import BotaoConclui from "./concluiTarefa.js"
import BotaoDeleta from "./deletaTarefa.js"

export const handleNovoItem = (event) => {
    event.preventDefault()

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const input = document.querySelector('[data-form-input]')
    const calendario = document.querySelector('[data-form-date')

    const dataSemFormato = new Date(calendario.value)
    const concluida = false

    const dados = {
        valor: input.value,
        data: dataSemFormato,
        concluida
    }

    localStorage.setItem("tarefas", JSON.stringify([...tarefas, dados]))
    input.value = ""

    carregaTarefa()
}

export const Tarefa = ({ valor, data, concluida }, id) => {

    const tarefa = document.createElement('li')
    concluida && tarefa.classList.add('done')
    tarefa.classList.add('task')

    const conteudo = `<p class="content" data-task>${formatHour((new Date(data)))} * ${valor}</p>`
    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConclui(carregaTarefa, id))
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id))

    return tarefa
}

export const formatDate = (date) => {
    return `${date.getDate()}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`
}

export const formatHour = (date) => {
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")
        }`
}
