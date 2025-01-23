import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    //usestate
    const [categories, setCategories] = useState(['One Punch Man', 'Dragon Ball Z', 'Batman']);
    
    const onAddCategory = (newCategory) => {

        const normalizedNewCategory = newCategory.toLowerCase();
        const normalizedCategories = categories.map(category => category.toLowerCase());

        if (normalizedCategories.includes(normalizedNewCategory)) return;
        
        setCategories([newCategory, ...categories])
        // setCategories(cat => [...cat, 'Valorant']);
    }
  

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={setCategories} 
                onNewCategory={value => onAddCategory(value)}
            />

            {/* Listado de Gif */}
            <ol>
                {categories.map( (category, i) => {
                    return <li key={i}>{category}</li>
                })}
            </ol>
                {/* Gif Item */}
        </>
    )
}

