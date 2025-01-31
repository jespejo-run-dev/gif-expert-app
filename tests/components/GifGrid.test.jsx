import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'Valorant'

    test('debe mostrar el loading inicialmente ', () => {
      
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))


    })

    test('debe mostrar items cuando se cargan las imagenes desde useFetchGifs', () => {

        const gifs = [
            {id: '1', title: 'GIF 1', url: 'url1'}, 
            {id: '2', title: 'GIF 2', url: 'url2'},
            {id: '3', title: 'GIF 3', url: 'url3'},
        
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(3);
        screen.debug();


    })
    
  
})
