import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas en <GifGrid />', () => {

    const category = 'Valorant'

    test('debe mostrar el loading inicialmente ', () => {
      
        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))

        screen.debug();

    })

    test('debe mostrar items cuando se cargan las imagenes desde useFetchGifs', () => {
        
    })
    
  
})
