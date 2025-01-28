import { getGifs } from "../../src/helpers/getGifts";

describe('Pruebas en getGifs()', () => {
    
    test('debe retornar un arreglo de gifs', async() => {
      
        const gifs = await getGifs('One Punch');

        // console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.stringMatching(/^https?:\/\/.+$/)

        })

    })
    

})
