import { getGifList } from "../../src/helpers/getGifList"

describe("Tests on getGifList", () => {


    test('Should return an GIFs Array', async () => {
        const gifList = await getGifList('Goku');
        // console.log(gifList);
        expect(gifList.length).toBeGreaterThan(0);
        expect(gifList[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    })

})