import { FirstApp } from "../src/FirstApp";
import { getAllByText, render } from '@testing-library/react';

describe('Prueba de FirstApp', () => { 
    // test('debe hacer match con el snapshot', () => {
    //     const title = 'Hola soy Goku';
    //     const { container } = render(<FirstApp title={ title }/>);

    //     expect( container ).toMatchSnapshot();
    // });

    test('debe mostrar el subtitulo enviado en un h1', () => {
        const title = 'Soy un subtitulo';
        // const subTitle = 'Soy un subtitulo';
        const { container, getByText, getByTestId } = render(<FirstApp title={ title } />);
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toContain( title );

        expect( getByTestId('test-title').innerHTML).toContain( title );
    });

    test('debe mostrar el subtitulo enviado por props', () => {
        const title = 'Soy un titulo';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render(
            <FirstApp 
                title={ title } 
                subTitle={ subTitle } 
            />
        );
        expect( getAllByText(subTitle).length ).toBeGreaterThan(0);
    });
 })