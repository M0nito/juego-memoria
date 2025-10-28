const emojis = ['🍎', '🍌', '🍇', '🍓', '🍒', '🍍', '🥝', '🍉'];
const cartas = [...emojis, ...emojis];
cartas.sort(() => Math.random() - 0.5);

const tablero = document.querySelector('.tablero');
let seleccionadas = [];

cartas.forEach((emoji, i) => {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.dataset.valor = emoji;
    carta.textContent = '';
    carta.addEventListener('click', () => revelar(carta));
    tablero.appendChild(carta);
});

function revelar(carta) {
    if (seleccionadas.length < 2 && !carta.classList.contains('revelada')) {
        carta.textContent = carta.dataset.valor;
        carta.classList.add('revelada');
        seleccionadas.push(carta);
        if (seleccionadas.length === 2) {
            setTimeout(verificar, 800);
        }
    }
}

function verificar() {
    const [a, b] = seleccionadas;
    if (a.dataset.valor !== b.dataset.valor) {
        a.textContent = '';
        b.textContent = '';
        a.classList.remove('revelada');
        b.classList.remove('revelada');
    }
    seleccionadas = [];
}
