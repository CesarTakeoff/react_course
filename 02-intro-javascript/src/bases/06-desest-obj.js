// Desestructuracion de objetos
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    // rango: 'Soldado'
};

const { nombre, edad, clave } = persona;

console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

console.log( nombre );
console.log( edad );
console.log( clave );

const UseContext = ( { nombre, edad, clave, rango = 'Capitan' } ) => {
    // console.log( nombre, edad, clave, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const { nombreClave, anios, latlng:{lat, lng}} = UseContext( persona );
console.log( nombreClave, anios );
console.log( lat, lng );