import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas de 11-async-await', () => { 
    test('getImagen debe retornar el url de la imagen', async() => {
        const { getImagen } = await import('../../src/base-pruebas/11-async-await');
        const url = await getImagen();
        // console.log(url);
       expect(url.includes('https://')).toBe(true);
    });
    test('getImagen debe retornar un mensaje de error', async() => {
        const { getImagen } = await import('../../src/base-pruebas/11-async-await');
        const url = await getImagen('*');
        // console.log(url);
        expect(url).toBe('No existe la imagen');
    })
 })
