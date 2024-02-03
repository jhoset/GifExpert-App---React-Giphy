import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";
// import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Tests on <GifGrid/>', () => {

    const category = 'Valorant';
    const id = 1;
    const onRemoveFn = () => { };

    test('Should display "Loading..." at the beginning ', async () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} id={id} onRemoveCategory={onRemoveFn} />)
        // screen.debug();
        expect(screen.getByText('Loading...'));
        // screen.debug();
    })

    test('Should display GridItems when Images are retrieved', () => {
        const gifList = [
            {
                id: '1ab',
                title: 'Killjoy',
                url: 'https://localhost:3000/saitama.gif'
            },
            {
                id: '2ab',
                title: 'Sova',
                url: 'https://localhost:3000/sova.gif'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifList,
            isLoading: true
        })
        render(<GifGrid category={category} id={id} onRemoveCategory={onRemoveFn} />)
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);

    })

})