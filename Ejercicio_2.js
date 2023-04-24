// Variables globales y locales
// Cambio dentro y fuera del bloque {}

var pelicula = "Los Locos Addams";
console.log("Variable película antes del bloque:", pelicula)

let musica = "Rock";
console.log("Variable músisa antes del bloque:", musica)

{
    var pelicula="Matilda";
    console.log("Variable película en el bloque:", pelicula)

    let musica="Salsa";
    console.log("Variable música en el bloque:", musica)
}

console.log("Variable película despues del bloque:", pelicula)
console.log("Variable música despues del bloque:", musica)


var nombre = "Pepito";
var apellido = "Perez";

let edad = "38";
let comida = "pizza";

{
    var nombre ="fulano";
    var apellido = "de tal";
    let edad = "40";
    let comida = "Ajiaco";

    console.log("la variable global se puede leer aqui", nombre)
    console.log("la variable global se puede leer aqui", apellido)
    console.log("la variable global se puede leer aqui", edad)
    console.log("la variable global se puede leer aqui", comida)
}

console.log("la variable global se puede leer aqui", nombre)
console.log("la variable global se puede leer aqui", apellido)
console.log("la variable global se puede leer aqui", edad)
console.log("la variable global se puede leer aqui", comida)