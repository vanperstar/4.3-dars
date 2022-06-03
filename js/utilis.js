function normalizeGenres(movies){
    let genres = []
    movies.forEach(movie =>{
        movie.genres.forEach((genre) => {
            if(!genres.includes(genre))genres.push(genre)
        })
    })

    return genres 
}
console.log(normalizeGenres(movies))