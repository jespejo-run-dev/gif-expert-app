import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    //usestate
    const [categories, setCategories] = useState(['One Punch Man', 'Dragon Ball Z', 'Batman']);
    
    const onAddCategory = () => {
        setCategories([...categories, 'Valorant'])
        // setCategories(cat => [...cat, 'Valorant']);
    }
  

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory setCategories={setCategories} />

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

