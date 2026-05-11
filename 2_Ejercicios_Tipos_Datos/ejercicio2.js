/*
2. Suma de Números desde el usuario
Ejercicio: Crea un script que pida al usuario dos números usando prompt() y muestre la suma de ambos.

Desafío: Asegúrate de convertir las entradas de texto a tipo Number antes de sumar, de lo contrario se concatenarán como texto.

*/ 
function sumarDosNumeros(a, b) {
  return Number(a) + Number(b);
}
 
console.log(sumarDosNumeros("5", "3"));  
console.log(sumarDosNumeros("10", "7")); 