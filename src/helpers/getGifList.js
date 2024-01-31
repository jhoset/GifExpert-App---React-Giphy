export const getGifList = async (category) => {
    const token = 'a0Fv0KwByXNOO6a5a5LJgtDvN3D9yGoG';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${token}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    const gifList = data.map(gif => (
        {
            id: gif.id,
            url: gif.images.downsized_medium.url,
            title: gif.title,

        }
    ))
    console.log(gifList)
    return gifList;
}