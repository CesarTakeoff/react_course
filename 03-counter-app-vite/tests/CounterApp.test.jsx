import { render, screen, fireEvent } from '@testing-library/react';
import CounterApp from '../src/CounterApp';

describe('Pruebas de CounterApp', () => { 
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={ 10 }/>);

        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar el valor por defecto de 100', () => {
        render(<CounterApp value={ 100 }/>);
        expect( screen.getByText('100') ).toBeTruthy();
    });

    test('debe incrementar con el boton +1', () => {
        render(<CounterApp value={ 100 }/>);
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('101') ).toBeTruthy();
    });
    
    test('debe decrementar con el boton -1', () => {
        render(<CounterApp value={ 100 }/>);
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('99') ).toBeTruthy();
    });
    
    test('debe resetear con el boton Reset', () => {
        render(<CounterApp value={ 100 }/>);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect( screen.getByText('100') ).toBeTruthy();
    });

 })