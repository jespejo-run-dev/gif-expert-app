import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
  
    test('Debe renderizar el título correctamente', () => {
        render(<GifExpertApp />);
        expect(screen.getByText('GifExpertApp')).toBeTruthy();
    });

    test('Debe agregar una nueva categoría', () => {
        render(<GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'Dragon Ball' } });
        fireEvent.submit(input);
        
        expect(screen.getByText('Dragon Ball')).toBeTruthy();
    });

    test('No debe agregar categorías duplicadas', () => {
        render(<GifExpertApp />);
        
        
        const input = screen.getByRole('textbox');
        
        fireEvent.change(input, { target: { value: 'One Punch Man' } });
        fireEvent.submit(input);
        
  
        // Verificamos que no se haya duplicado 'One Punch Man'
        const categories = screen.queryAllByText('One Punch Man');
        expect(categories).toHaveLength(1);
    });

});
