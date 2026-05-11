/*
1. Manipulación de Strings (Cadenas)
Ejercicio: Escribe una función llamada ucFirst(str) que reciba un texto y devuelva el mismo texto pero con la primera letra en mayúscula.

Pista: Los strings son inmutables, por lo que deberás crear uno nuevo combinando el primer carácter en mayúsculas y el resto de la cadena.
*/

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
 
console.log(ucFirst("hola mundo"));
console.log(ucFirst("javascript")); 
console.log(ucFirst(""));           