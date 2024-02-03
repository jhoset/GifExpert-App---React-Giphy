import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Tests on <GifExpertApp/>', () => {

    test('Should match the snapshot', () => {
        const { container } = render(<GifExpertApp />)
        expect(container).toMatchSnapshot();
    })

    test('Should add new category when onNewCategory Fn is called', () => {
        // ? ARRANGE
        const catInputValue = 'Valorant';
        // ? ACT
        render(<GifExpertApp/>);
        const searchInputRef = screen.getByRole('searchbox');
        fireEvent.input(searchInputRef, { target: { value: catInputValue } })
        fireEvent.submit(searchInputRef)
        const category = screen.getByLabelText('category-result');
        // ? ASSERT
        expect(category).toBeTruthy();
    })

    test('Should not add new category when onNewCategory Fn is called with empty value', () => {
        // ? ARRANGE

        // ? ACT
        render(<GifExpertApp/>);
        const searchInputRef = screen.getByRole('searchbox');
        fireEvent.submit(searchInputRef)
        const category = screen.queryByLabelText('category-result');
        // ? ASSERT
        expect(category).toBeFalsy();
    })

    
    test('Should not add new category when onNewCategory Fn is called with existing value', () => {
        // ? ARRANGE
        const catInputValue = 'Valorant';
        // ? ACT
        render(<GifExpertApp/>);
        const searchInputRef = screen.getByRole('searchbox');
        fireEvent.input(searchInputRef, { target: { value: catInputValue } })
        fireEvent.submit(searchInputRef)
        fireEvent.input(searchInputRef, { target: { value: catInputValue } })
        fireEvent.submit(searchInputRef)
        const categories = screen.queryAllByLabelText('category-result');
        // ? ASSERT
        expect(categories.length).toBe(1)
    })
})