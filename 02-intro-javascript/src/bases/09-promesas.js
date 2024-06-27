import { getHeroeById } from "./bases/heroesObj";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     //resolve( heroe );
//    reject('No se pudo encontrar el héroe');
//   }, 2000);
// });

// promesa.then(( heroe ) => {
//   console.log('Heroe:', heroe);
// }).catch( err => console.warn( err ) );

const getHeroeByIdAsync = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 2000);
  });
}
const id = 3;
getHeroeByIdAsync(id).then(heroe => console.log(heroe)).catch( err => console.error(err));
getHeroeByIdAsync(id).then(console.log).catch(console.error);