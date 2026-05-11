/*

3. Operaciones con Objetos Literales
Ejercicio: Realiza las siguientes acciones en orden:

Crea un objeto vacío llamado user.
Agrega la propiedad name con el valor "John".
Cambia el valor de name a "Pete".
Elimina la propiedad name del objeto.

*/
let user = {};                // 1. Crear objeto vacío
user.name = "John";           // 2. Agregar propiedad name = "John"
user.name = "Pete";           // 3. Cambiar name a "Pete"
delete user.name;             // 4. Eliminar propiedad name
 
console.log(user); // {}