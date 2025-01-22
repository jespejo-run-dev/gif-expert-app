import { useState } from "react"

export const GifExpertApp = () => {

    //usestate
    const [categories, setCategories] = useState(['One Punch Man', 'Dragon Ball Z', 'Batman']);
    
    console.log(categories);
    

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

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

