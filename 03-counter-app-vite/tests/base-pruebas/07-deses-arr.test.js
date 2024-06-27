import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas de 07-deses-arr', () => { 
    test('debe de retornar un string y un número', () => {

        const [ letters, numbers] = retornaArreglo(); // ['ABC', 123]
        expect( letters ).toEqual('ABC');
        expect( typeof letters ).toBe('string');
        expect( letters ).toEqual( expect.any(String) );
        expect( numbers ).toEqual(123);
        expect( typeof numbers ).toBe('number');
        expect( numbers ).toEqual( expect.any(Number) );
        
    })
 })