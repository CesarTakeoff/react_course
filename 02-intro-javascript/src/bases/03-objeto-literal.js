const persona = {
    nombre: 'Cesar',
    apellido: 'Pacheco',
    edad: 55,
    direccion: {
        ciudad: 'Caracas',
        zip: 123456,
        lat: 14.3232,
        lng: 34.923332
    }
};

console.log( persona, { persona } );
console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';
console.log( persona2 );
console.log( persona );