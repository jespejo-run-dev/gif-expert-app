import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {
  
    test('debe de cambiar el valor de la caja de texto ', () => {
        
        render(<AddCategory onNewCategory={() => {}} />) 
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: {value: 'Valorant'} });

        expect(input.value).toBe('Valorant');


    })

    test('debe llamar onNewCategory si el input tiene un valor', () => {
      
        const inputValue = 'Valorant';
        // TODO: 

        render(<AddCategory onNewCategory={() => {}} />) 
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value: inputValue} });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        screen.debug();

    })
    
    

})
