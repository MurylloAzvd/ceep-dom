import { ordenaDatas, removeDatasRepetidas } from "../service/data.js"
import { criaData } from "./criaData.js"

export const carregaTarefa = () => {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const lista = document.querySelector('[data-list]')

    lista.innerHTML = ""
    const datasUnicas = removeDatasRepetidas(tarefas)
    ordenaDatas(datasUnicas)
    datasUnicas.forEach(data => {
        lista.appendChild(criaData(data))
    })
}