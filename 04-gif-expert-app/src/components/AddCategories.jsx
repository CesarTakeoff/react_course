import { useState } from "react"

export const AddCategories = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState(['']);

    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();
        if (inputValue.trim().length > 0) {
            onNewCategory( inputValue );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
