
// export async function testfunction(movies, minYear, maxYear) {
//     // console.log(movies)    
//     movies.forEach(function(movie, index, object) {
//         console.log(movie)
//         // if (year > maxYear || year < minYear) {
//         //   console.log(index)
//         //     i++;
//         //     object.splice(index, 1);
//         // }
//     });
//     console.log('Done!');

// }

const deleteMovie = (object, index) => {
    object.splice(index, 1);
    console.log('Movie got deleted')
}

const compareYear = (movie, minYear) => {
    let year = Number(movie.release_date.substring(0, 4))
    console.log(year)
    return new Promise((resolve, reject) => {
        if (year < minYear) {
            reject()   
        } else {
            resolve()
        }
    })
}


export function filterByYear(movies, minYear, maxYear) {
    movies.forEach(async function(movie, index, object) {
        await compareYear(movie, minYear)
            .then(() => {
                deleteMovie(object, index)
            })
            .catch(() => console.log('keep the movie'))
    });
    return (movies)
}