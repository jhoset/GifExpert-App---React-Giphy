import { render, screen } from "@testing-library/react"
import GifGridItem from "../../src/components/GifGridItem"

describe("Tests in <GifGridItem />", () => {

    const title = 'Hamlechi';
    const url = 'https://hamlechi/photo.jpg';

    test('Should match the snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test('Should display the image with the URL and default ALT', () => {
        render(<GifGridItem title={title} url={url} />)
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Should display title in the component', () => {
        render(<GifGridItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy();
    })

})