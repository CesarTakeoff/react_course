import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {
    test('Prueba en el método getSaludo', () => {
        // Arrange
        const nombre = 'Cesar';
        // Act
        const saludo = getSaludo( nombre );
        // Assert
        expect(saludo).toBe(`Hola ${ nombre }`);
    });

    test('Prueba en el método getSaludo sin argumento', () => {
        // Arrange
        // Act
        const saludo = getSaludo();
        // Assert
        expect(saludo).toBe('Hola Carlos');
    });
 })