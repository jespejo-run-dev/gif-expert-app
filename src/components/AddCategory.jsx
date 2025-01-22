import { useState } from "react";

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hajime no Ippo');

    const onInputChange = ({target}) => {     
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="test"
                placeholder="Buscar gif"
                value={inputValue}
                onChange={ onInputChange }
                />
        </form>
    )
}
