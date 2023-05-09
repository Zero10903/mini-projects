const botones = document.querySelectorAll('.game__button');
const ganador = document.querySelector('.game__winner');
const game = document.querySelector('.game');

const reiniciarMensaje = () => {
  setTimeout(() => {
    ganador.innerHTML = 'Esperando resultado...';
    game.style.backgroundColor = 'blueviolet';
  }, 1500);
};

const victoria = () => {
  ganador.innerHTML = 'Has ganado :D';
  game.style.backgroundColor = '#32CD32';
};
const derrota = () => {
  ganador.innerHTML = 'Has perdido :(';
  game.style.backgroundColor = '#DC143C';
};
const empate = () => {
  ganador.innerHTML = '¡Empate! Nadie ha ganado.';
  game.style.backgroundColor = '#D3D3D3';
};

botones.forEach((boton) => {
  boton.addEventListener('click', (event) => {
    const botChoice = Math.floor(Math.random() * 3) + 1;

    if (event.target.id === 'piedra') {
      if (botChoice === 1) {
        empate();
        reiniciarMensaje();
      }

      if (botChoice === 2) {
        derrota();
        reiniciarMensaje();
      }
      if (botChoice === 3) {
        victoria();
        reiniciarMensaje();
      }
    }
    if (event.target.id === 'papel') {
      if (botChoice === 1) {
        victoria();
        reiniciarMensaje();
      }
      if (botChoice === 2) {
        empate();
        reiniciarMensaje();
      }
      if (botChoice === 3) {
        derrota();
        reiniciarMensaje();
      }
    }
    if (event.target.id === 'tijeras') {
      if (botChoice === 1) {
        derrota();
        reiniciarMensaje();
      }
      if (botChoice === 2) {
        victoria();
        reiniciarMensaje();
      }
      if (botChoice === 3) {
        empate();
        reiniciarMensaje();
      }
    }
  });
});
