const getFetchImage = async () => {
    const apiKey = "dnccLxB3UTRK7Rk88Uel1rPGMZ5b0nK7";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  };
  
  getFetchImage();
  