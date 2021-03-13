import BotaoConcluir from './componentes/concluiTarefa.js';
import BotaoRemoveTarefa from './componentes/deletaTarefa.js';


    const criarTarefa = (evento)=>{
    evento.preventDefault();

    let lista = document.querySelector('[data-list]');
    let input = document.querySelector('[data-form-input]');
    //let valor = input.value;
    let tarefa =  document.createElement('li');
    tarefa.classList.add('task');

    let conteudo = `<p class="content">${input.value}</p> `;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConcluir());
    tarefa.appendChild(BotaoRemoveTarefa());
    lista.appendChild(tarefa);
    input.value = " ";

    }


    let tarefa = document.querySelector('[data-form-button]');


    tarefa.addEventListener('click',criarTarefa);


    

    

