// Desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [p1, p2, p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

const [, , p4] = personajes;
console.log(p4);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. Se llamará setNombre
const UseState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

const arr = UseState('Goku');
console.log(arr);
arr[1]();

const [nombre, setNombre] = UseState('Goku');
console.log(nombre);
setNombre();
