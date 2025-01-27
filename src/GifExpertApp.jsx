import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    //usestate
    const [categories, setCategories] = useState(['One Punch Man']);
    
    const onAddCategory = (newCategory) => {

        const normalizedNewCategory = newCategory.toLowerCase();
        const normalizedCategories = categories.map(category => category.toLowerCase());

        if (normalizedCategories.includes(normalizedNewCategory)) return;
        
        setCategories([newCategory, ...categories])
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

