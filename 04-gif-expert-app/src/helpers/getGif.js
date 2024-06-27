export const getGifs = async ( category, apiKey ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=5&api_key=${ apiKey }`;
    const response = await fetch(url);
    const { data } = await response.json();
    // console.log(response);
    // console.log(data);
    const gifs = data.map(({ id, title, images }) => ({
        id,
        title,
        url: images.downsized_medium.url
    }));

    return gifs;
}