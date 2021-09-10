export const removeDatasRepetidas = (tarefas) => {

    const datas = tarefas.map(tarefa => (new Date(tarefa.data)).toDateString())
    const datasUnicas = []

    datas.forEach(data => {
        if (datasUnicas.indexOf(data) == -1) {
            datasUnicas.push(data)
        }
    })

    return datasUnicas.map(data => (new Date(data)))
}

export const ordenaDatas = (datas) => {
    return datas.sort((a, b) => a.getTime() - b.getTime())
}