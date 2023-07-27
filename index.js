fetch("https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20", {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8f691decadmsha01d8627ebd30d3p15aa32jsn2f0b59b3cbee',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
})
    .then(response => response.json())
    .then(data => {

        const list = data.d; //data stored in d

        list.map((item) => {

           const name = item.l;

           const year = item.y;
           const stars = item.s;

           const image = item.i.imageUrl;

           const movie = `<li> <h2>${name}</h2> <h3>${year}</h3> <h3>${stars}</h3> <img src="${image}"></li>`
            document.querySelector('.movies').innerHTML += movie;
        })
    })
    .catch(err => {
        console.log(err)
    });