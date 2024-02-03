import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../src/hooks/useFetchGifs"

describe('Test on useFetchGifs Hook', () => {
    const categoryToTest = 'Valorant';

    test('Should return initial state', () => {
        const { result } = renderHook(() => useFetchGifs(categoryToTest))
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('Should return and array of GIFs & Loading change to False', async () => {
        const { result } = renderHook(() => useFetchGifs(categoryToTest))
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 1000
            }
        );
        const { images, isLoading } = result.current;

        expect(images.length).not.toBe(0);
        expect(isLoading).toBe(false);

    })


})