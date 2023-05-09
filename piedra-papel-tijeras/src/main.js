const botones = document.querySelectorAll('.game__button');
const ganador = document.querySelector('.game__winner');

botones.forEach((boton) => {
  boton.addEventListener('click', (event) => {
    const botChoice = Math.floor(Math.random() * 3) + 1;
    if (event.target.id === 'piedra') {
      if (botChoice === 1) ganador.innerHTML = '¡Empate! Nadie ha ganado.';
      if (botChoice === 2) ganador.innerHTML = 'Has perdido :(';
      if (botChoice === 3) ganador.innerHTML = 'Has ganado :D';
    }
    if (event.target.id === 'papel') {
      if (botChoice === 1) ganador.innerHTML = 'Has ganado :D';
      if (botChoice === 2) ganador.innerHTML = '¡Empate! Nadie ha ganado.';
      if (botChoice === 3) ganador.innerHTML = 'Has perdido :(';
    }
    if (event.target.id === 'tijeras') {
      if (botChoice === 1) ganador.innerHTML = 'Has perdido :(';
      if (botChoice === 2) ganador.innerHTML = 'Has ganado :D';
      if (botChoice === 3) ganador.innerHTML = '¡Empate! Nadie ha ganado.';
    }
  });
});
