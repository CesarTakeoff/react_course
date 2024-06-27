import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba de 06-deses-obj', () => { 
    
        test('debe de retornar un objeto', () => {
            const clave = 'ABC123';
            const nombre = 'Juan';
            const edad = 25;
            const userTest = {
                nombreClave: clave,
                anios: edad,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
            }

            const user = usContext({ clave, nombre, edad });
            expect( user ).toEqual( userTest );

        });
 })