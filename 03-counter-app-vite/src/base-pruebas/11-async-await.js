
export const getImagen = async(apiK = '3QUxvsEq62aYM6dnuM51wwX84qTItcbY') => {

    try {

        const apiKey = apiK;
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No existe la imagen';
    }
    
    
    
}

 getImagen();



