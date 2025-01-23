import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

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
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map( (category) => (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    )
                )
            }
        </>
    )
}

