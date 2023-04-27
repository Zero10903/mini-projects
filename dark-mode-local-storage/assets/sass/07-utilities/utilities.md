# UTILITIES.scss

Engloba a todas aquellas reglas que anulan cualquier otra que se haya definido en las capas anteriores. Es la única capa en donde se permite utilizar !important. Un ejemplo sería tener una clase que nos permita ocultar elementos mediante un display: none.

## Algunos ejemplos

.d-none {
display: none!important;
}
