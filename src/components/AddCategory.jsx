import { useState } from "react";

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('Hajime no Ippo');

    const onInputChange = ({target}) => {     
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        setCategories(categories => [inputValue, ...categories]);

        setInputValue('');

    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="test"
                placeholder="Buscar gif"
                value={inputValue}
                onChange={ onInputChange }
                />
        </form>
    )
}
