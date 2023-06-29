const form = document.getElementById('form');

let aFazer = [];
let emAndamento = [];
let feito = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const campoTarefa = document.getElementById('tarefa');
    const tarefa = campoTarefa.value;

    aFazer.push(tarefa);
    campoTarefa.value = "";

    mostrarAfazer();
})

function mostrarAfazer() {
    const listaAfazer = document.getElementById('lista__a-fazer');

    listaAfazer.innerHTML = '';
    
    aFazer.forEach((tarefa, index) => {
        let item = document.createElement('li');
        item.classList = 'item item__a-fazer'
        
        let texto = document.createElement('p');
        texto.classList = 'item__texto'
        texto.textContent = tarefa;

        let botaoIniciar = document.createElement('button');
        botaoIniciar.className = 'iniciar';
        botaoIniciar.textContent = 'Iniciar';

        botaoIniciar.addEventListener('click', () => {
            passarEmAndamento(index);
        })

        item.appendChild(texto);
        item.appendChild(botaoIniciar);
        listaAfazer.appendChild(item);
    })
}

function passarEmAndamento(index) {
    const tarefa = aFazer.splice(index, 1);
    emAndamento.push(tarefa);

    mostrarAfazer();
    mostrarEmAndamento();
};

function mostrarEmAndamento() {
    const listaEmAndamento = document.getElementById('lista__em-andamento');

    listaEmAndamento.innerHTML = '';

    emAndamento.forEach((tarefa, index) => {
        let item = document.createElement('li');
        item.classList = 'item item__em-andamento';

        let texto = document.createElement('p');
        texto.classList = 'item__texto';
        texto.textContent = tarefa;

        let botaoConcluir = document.createElement('button');
        botaoConcluir.classList = 'concluir';
        botaoConcluir.textContent = 'Concluir';

        botaoConcluir.addEventListener('click', () => {
            passarFeito(index);
        })

        item.appendChild(texto);
        item.appendChild(botaoConcluir);
        listaEmAndamento.appendChild(item);
    })
}

function passarFeito(index) {
    const tarefa = emAndamento.splice(index, 1);
    feito.push(tarefa);

    mostrarEmAndamento();
    mostrarFeito();
}

function mostrarFeito() {
    const listaFeito = document.getElementById('lista__feito');

    listaFeito.innerHTML = '';

    feito.forEach((tarefa) => {
        let item = document.createElement('li');
        item.classList = 'item item__feito';

        let texto = document.createElement('p');
        texto.classList = 'item__texto feito__texto';
        texto.textContent = tarefa;

        let botaoExcluir = document.createElement('button');
        botaoExcluir.classList = 'excluir'
        botaoExcluir.textContent = 'Excluir';

        botaoExcluir.addEventListener('click', () => {
            excluir(tarefa);
        });

        item.appendChild(texto);
        item.appendChild(botaoExcluir);
        listaFeito.appendChild(item);
    })
}

function excluir(tarefa) {
    const index = feito.indexOf(tarefa);

    feito.splice(index, 1);

    mostrarFeito();
}
