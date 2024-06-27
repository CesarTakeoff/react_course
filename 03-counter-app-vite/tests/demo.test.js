describe('Pruebas en <DemoComponent />', () => { 
    test('Esta prueba no debe fallar', () => {
        // Arrange
        const mensaje = 'Hola Mundo';
        // Act
        const mensaje2 = `Hola Mundo`;
        // Assert
        expect(mensaje).toBe(mensaje2);
    });
 });
