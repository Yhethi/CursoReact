const apiKey = "dnccLxB3UTRK7Rk88Uel1rPGMZ5b0nK7";
// https://api.giphy.com/v1/gifs/random?api_key=dnccLxB3UTRK7Rk88Uel1rPGMZ5b0nK7

const imagen = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

imagen
  .then((data) => data.json())
  .then(({ data }) => {
    console.log(data.images.original.url);
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
