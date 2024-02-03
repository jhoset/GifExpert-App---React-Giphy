import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


let nextId = 0;

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ ]);

    const onAddCategory = (newCat) => {
        let existingCat = categories.find(cat => cat.name == newCat);
        if (existingCat) return;
        setCategories([{ id: nextId++, name: newCat }, ...categories]);
    }
    // console.log(categories);
    const onRemoveCategory = (catId) => {
        let catFiltered = categories.filter(cat => cat.id !== catId);
        setCategories(catFiltered)
    }
    return (
        <>
            {/* Title */}
            

            <h1> GifExpert <a href="#" data-replace="By Jhoset"><span>Application</span></a> </h1>
            {/* Input */}

            {/* IT'S NOT BAD TO SEND PARAMETER TO THE USER TO UPDATE */}
            {/* BUT THERE'S A BETTER SOLUTION */}
            {/* <AddCategory setCategories={setCategories}/> */}

            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {/* Gif List */}
            {
                categories.map(cat => (
                    <GifGrid category={cat.name} id={cat.id} key={cat.id} onRemoveCategory={ (id) => onRemoveCategory(id)} />
                ))
            }
            {/* Gif Item */}
        </>
    )
}
