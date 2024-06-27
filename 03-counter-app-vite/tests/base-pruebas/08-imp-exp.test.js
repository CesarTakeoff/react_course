import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas 08-imp-exp', () => { 
    test('getHeroeById debe retornar un héroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( (heroe) => heroe.id === id );
        expect( heroe ).toEqual(heroeData);
    });

    test('getHeroeById debe retornar undefined si héroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect( heroe ).toBe(undefined);
        expect( heroe ).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter( (heroe) => heroe.owner === owner );
        expect( heroes.length ).toBe(3);
        expect( heroes ).toEqual(heroesData);
    });

    test('getHeroesByOwner debe retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect( heroes.length ).toBe(2);
        expect( heroes ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });
 })