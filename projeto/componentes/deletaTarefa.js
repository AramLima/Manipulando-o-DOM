
const BotaoRemoveTarefa = () => {
    let botaoDeleta = document.createElement('button');

    botaoDeleta.classList.add('delete-button');
    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

const deletarTarefa = (evento) => {
    let botaoDeleta = evento.target;

    let tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();

    return botaoDeleta;
}

export default BotaoRemoveTarefa;