// Ejercicio 4
// Tipos de datos en programación.

// cadena de TEexto
let cadenaTexto = "Hola Mundo";

console.log(cadenaTexto) 
console.log(typeof(cadenaTexto)) 

let nombre = "Kamilo";
cadenaTexto= "Hola!" + " Mi nombre es " + nombre
console.log(cadenaTexto)

//Tipo número concatenar texto con número
let edad=29;
console.log(`${nombre} tiene ${edad} años`)
console.log(typeof(edad))

// tipo Booleano

let verdadero = true;
console.log("El verdadero se define con",verdadero)
console.log(typeof(verdadero))

//Cuando no se asigna ningun valor es de tipo undefined
let color;
console.log(`Mi color favorito es ${color}`)

// Código del ejercicio

var Nombre = "Kamilo";
let Apellido = "Soto";
let Edad = 29;
let Cancion = "When the music is over - The Doors";
let Respuesta = true;

console.log(`Hola! mi nombres es ${Nombre} ${Apellido} y tengo ${Edad} años, mi canción favorita es: ${Cancion} y la respuesta es ${Respuesta}`)
