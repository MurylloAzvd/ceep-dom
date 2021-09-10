const BotaoConclui = (carregaTarefa, id) => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click', () => concluirTarefa(carregaTarefa, id))

    return botaoConclui
}

const concluirTarefa = (carregaTarefa, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
    carregaTarefa()
}

export default BotaoConclui