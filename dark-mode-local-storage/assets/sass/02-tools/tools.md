# TOOLS.scss

Si se utiliza preprocesador, las funciones y mixins se definen en esta capa. Al igual que la anterior, no genera CSS.

## Algunos ejemplos son

@function sum($numbers...) {
$sum: 0;
@each $number in $numbers {
$sum: $sum + $number;
}
@return $sum;
}
