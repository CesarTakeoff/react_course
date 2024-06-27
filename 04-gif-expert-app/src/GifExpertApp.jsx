import { useState } from 'react'
// import { AddCategories } from './components/AddCategories';
// import { GifGrid } from './components/GifGrid';
import { AddCategories, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories(cats => [...cats, newCategory]);
    }
    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategories
                onNewCategory={onAddCategory}
            />
            {categories.map(category => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))}
        </>
    )
}
