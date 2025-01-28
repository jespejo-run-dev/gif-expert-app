export const getGifs = async (category) => {
    // Usar la clave de API desde la variable de entorno
    const apiKey = 'gpl09YDu5saQWihh0VcqitpXfjMfCReG'; //import.meta.env.VITE_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
};