import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (category, apiKey) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category, apiKey);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        // getGifs( category, apiKey ).then( setImages );
        getImages();
    }, []);
    return {
        images,
        isLoading,
    }
}
