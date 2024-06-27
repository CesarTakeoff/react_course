import heroes, { owners } from "../data/heroes";

// const getHeroeById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// };

// Parentesis are not needed when there is only one argument
// const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);
const getHeroeById = id => heroes.find( heroe => heroe.id === id);
const getHeroeByOwner = owner => heroes.filter( heroe => heroe.owner === owner);

console.log(getHeroeById(2)); // {id
console.log(getHeroeByOwner('DC')); // [{id: 1, name: 'Batman', owner: 'DC'}, {id: 3, name: 'Superman', owner: 'DC'}, {id: 4, name: 'Flash', owner: 'DC'}]
console.log(owners); // ['DC', 'Marvel']