// const getImagenPromesa = () => new Promise(resolve => resolve('https://asdasd.com'));
// getImagenPromesa().then(console.log);

const getImagen = async() => {
    try {
        const apiKey = '3QUxvsEq62aYM6dnuM51wwX84qTItcbY';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const { data } = await resp.json();
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    
    } catch (error) {
        console.error(error);
    }
}

getImagen(); // This will display a random gif in the browser