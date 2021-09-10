const BotaoDeleta = (carregaTarefa, id) => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', () => deletarTarefa(carregaTarefa, id))

    return botaoDeleta
}

const deletarTarefa = (carregaTarefa, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasCadastradas.splice(id, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
    carregaTarefa()
}

export default BotaoDeleta