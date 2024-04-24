const formularioTarefa = document.getElementById('formulario-tarefa');
const tarefasDiv = document.getElementById('tarefas');
const idTarefaInput = document.getElementById('id-tarefa');

let tarefas = [];

formularioTarefa.addEventListener('submit', (e) => {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const categoria = document.getElementById('categoria').value;
    const prioridade = document.getElementById('prioridade').value;
    const dataExecucao = document.getElementById('data-execucao').value;

    const tarefa = {
        id: Date.now(),
        titulo,
        descricao,
        categoria,
        prioridade,
        dataExecucao
    };

    if (idTarefaInput.value) {
        const index = tarefas.findIndex(t => t.id === parseInt(idTarefaInput.value));
        tarefas[index] = tarefa;
        idTarefaInput.value = '';
    } else {
        tarefas.push(tarefa);
    }

    renderTarefas();
    formularioTarefa.reset();
});

function renderTarefas() {
    tarefasDiv.innerHTML = '';

    tarefas.forEach(tarefa => {
        const tarefaItem = document.createElement('div');
        tarefaItem.classList.add('tarefa');

        tarefaItem.innerHTML = `
            <h3>${tarefa.titulo}</h3>
            <p><strong>Descrição:</strong> ${tarefa.descricao}</p>
            <p><strong>Categoria:</strong> ${tarefa.categoria}</p>
            <p><strong>Prioridade:</strong> ${tarefa.prioridade}</p>
            <p><strong>Data de Execução:</strong> ${tarefa.dataExecucao}</p>
            <button onclick="editarTarefa(${tarefa.id})">Editar</button>
            <button onclick="excluirTarefa(${tarefa.id})">Excluir</button>
        `;

        tarefasDiv.appendChild(tarefaItem);
    });
}

function editarTarefa(id) {
    const tarefa = tarefas.find(tarefa => tarefa.id === id);
    document.getElementById('titulo').value = tarefa.titulo;
    document.getElementById('descricao').value = tarefa.descricao;
    document.getElementById('categoria').value = tarefa.categoria;
    document.getElementById('prioridade').value = tarefa.prioridade;
    document.getElementById('data-execucao').value = tarefa.dataExecucao;
    idTarefaInput.value = id;
}

function excluirTarefa(id) {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    renderTarefas();
}