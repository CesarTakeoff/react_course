const saludar = function ( nombre ) {
    return `Hola ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola ${ nombre }`;

console.log(saludar('Cesar')); // Hola Mundo
console.log(saludar2('Pacheco')); // Hola Mundo
console.log(saludar3('Mundo')); // Hola Mundo

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

console.log(getUser());

// Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
// function getUsuarioActivo( nombre ) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// }

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Cesar');
console.log(usuarioActivo);

