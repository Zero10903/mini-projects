const body = document.body;
const cardImg = document.querySelector('#card__image');
const cardBtn = document.querySelector('#card__btn');

// Se guarda el valor del contador en el localStorage para mantener el theme entre sesiones
let darkMode = localStorage.getItem('darkMode') === 'true';

// Funcion para cambiar la imagen de la card
const toggleImg = () => {
  if (darkMode) {
    cardImg.src =
      'https://images.unsplash.com/photo-1509226704106-8a5a71ffbfa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
  } else {
    cardImg.src =
      'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
  }
};

// Funcion para cambiar el fondo de la web
const toggleBg = () => {
  if (darkMode) {
    body.style.background =
      'center / cover url("https://images.unsplash.com/photo-1504892612018-159ffa1d147f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")';
  } else {
    body.style.background =
      'center / cover url("https://images.unsplash.com/photo-1497384401032-2182d2687715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")';
  }
};

// Funcion para cambiar el color del boton
const toggleBtn = () => {
  if (darkMode) {
    cardBtn.style.backgroundColor = '#c7158590';
  } else {
    cardBtn.style.backgroundColor = '#ffc0cb90';
  }

  cardBtn.addEventListener('mouseover', (e) => {
    if (darkMode) {
      cardBtn.style.backgroundColor = '#ffc0cb90';
    } else {
      cardBtn.style.backgroundColor = '#c7158590';
    }
  });
  cardBtn.addEventListener('mouseleave', (e) => {
    if (darkMode) {
      cardBtn.style.backgroundColor = '#c7158590';
    } else {
      cardBtn.style.backgroundColor = '#ffc0cb90';
    }
  });
};

// Funcion que llama a las anteriores al ser invocada
const toggle = () => {
  toggleImg();
  toggleBg();
  toggleBtn();
};

// EventListener que 'escucha' cuando el boton es clickeado
cardBtn.addEventListener('click', (e) => {
  darkMode = !darkMode;
  localStorage.setItem('darkMode', darkMode);

  toggle();
});

// Se llama a esta funcion para mantener actualizado el Theme al ingresar nuevamente a la pagina
toggle();
