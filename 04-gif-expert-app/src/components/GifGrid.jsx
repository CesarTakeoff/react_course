import { GifItem } from "./";
import { useFetchGifs } from "../hooks/useFetchGifs";

const apiKey = '3QUxvsEq62aYM6dnuM51wwX84qTItcbY';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category, apiKey);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && <p>Loading...</p>}
            <div className="card-grid">
                {images.map(( image ) => (
                    <GifItem 
                        key={image.id}
                        {...image}/>
                ))}
            </div>
        </>
    )
}
