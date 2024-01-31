import { useEffect, useState } from "react";
import { getGifList } from '../helpers/getGifList'
export default function useFetchGifs(category) {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAsyncImages = async () => {
        const newImages = await getGifList(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getAsyncImages();

        // ** Working with Promises
        // getGifList(category)
        //     .then(newImages => setImages(newImages))
        //     .catch(error => console.warn(error));
    }, [])

    return {
        images,
        isLoading
    }
}
