import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    //usestate
    const [categories, setCategories] = useState(['One Punch Man', 'Dragon Ball Z', 'Batman']);
    
    const onAddCategory = (newCategory) => {       
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
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
                {/* Gif Item */}
        </>
    )
}

