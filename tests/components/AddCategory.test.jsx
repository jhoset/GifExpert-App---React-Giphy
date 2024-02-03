import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Tests on <AddCategory/>', () => {
    test('Should change the value on Input Textbox', () => {

        render(<AddCategory onNewCategory={() => { }} />)
        const valueToTest = "Kakaroto";
        const inputRef = screen.getByRole('searchbox');
        fireEvent.input(inputRef, { target: { value: valueToTest } })
        expect(inputRef.value).toBe(valueToTest);
        // screen.debug();
    })

    test('Should call onNewCategory if Input has a valid Value', () => {
        const valueToTest = "Gohan";
        const onNewCategoryMockFn = jest.fn();
        // TODO: ???
        render(<AddCategory onNewCategory={onNewCategoryMockFn} />);
        const inputRef = screen.getByRole('searchbox');
        const formRef = screen.getByRole('form');

        fireEvent.input(inputRef, { target: { value: valueToTest } })
        fireEvent.submit(formRef);
        expect(onNewCategoryMockFn).toHaveBeenCalledTimes(1);
        expect(onNewCategoryMockFn).toHaveBeenCalledWith(valueToTest.trim());
        expect(inputRef.value).toBe('');
        // screen.debug();
    })

    test('Should not call onNewCategory when Input has invalid value', () => {
        const onNewCategoryMockFn = jest.fn();
        render(<AddCategory onNewCategory={onNewCategoryMockFn} />);
        const formRef = screen.getByRole('form');

        fireEvent.submit(formRef);
        expect(onNewCategoryMockFn).not.toHaveBeenCalled();
    })
})