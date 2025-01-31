import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe regresar el estado incial', () => {
      
       const {result} = renderHook(() => useFetchGifs('Valorant'))
       const {images, isLoading} = result.current

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    })
    
    test('debe retornar un arreglo de imagenes y isLoading en false', async() => {
      
        const {result} = renderHook(() => useFetchGifs('Valorant'))
        
        await waitFor(
             () => expect(result.current.images.length).toBeGreaterThan(0)
        )
           
        const {images, isLoading} = result.current

        
 
         expect(images.length).toBeGreaterThan(0);
         expect(isLoading).toBeFalsy();
 
     })
})
