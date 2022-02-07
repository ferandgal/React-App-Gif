const apiKey = 'GgZFxJX9fFGwSxfJzSop7I3Tx9bea6bj';

export default function getGifs(keyword = 'cars', limit = 3) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=es`;
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
        const {data} = response;
        const gifs = data.map(image => {
            const {images, title, id} = image;
            const {url} = images.downsized_medium;
            return {title, id, url}
        });
        return gifs;    
    })
}