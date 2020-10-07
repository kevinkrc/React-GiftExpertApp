export const getGift = async(categoria) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=10&api_key=TyZdQInziRRxP5BlnjG7QeUrS3utIw5l`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url, // El signo de interrogacion es en cado de no traer imagen, si no trae imagne no la utiliza
        }
    });

    return gifs;
}