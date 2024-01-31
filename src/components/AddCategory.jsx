import { useState } from "react"
import PropTypes from "prop-types"


export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        // console.log(target.value);
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.trim().length) return;
        // setCategories((currentCategories) => {
        //     const lastID = currentCategories.at(-1).id + 1;
        //     return [...currentCategories, { id: lastID, name: inputValue },]
        // });
        onNewCategory(inputValue.trim())
        setInputValue("");
    }


    return (
        <form onSubmit={onSubmit}>
            <input type="search"
                value={inputValue}
                onChange={onInputChange}
                placeholder="Search GIFs" />
        </form>
    )
}
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
    // categories: PropTypes.array.isRequired
}
