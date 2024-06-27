import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe('Pruebas 09-promesas', () => { 
    test('getHeroeByIdAsync debe retornar un héroe async usando la funcion "done"', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });
    });
    test('getHeroeByIdAsync debe retornar un error si héroe no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBeFalsy();
                done();
            })
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            });
    });
 })