import Movie from '../models/movie.model';
import fs from 'fs';

class MovieManager {
    static movieExists(imdb_id) {
        return new Promise((resolve, reject) => {
            Movie.findOne({ imdb_id })
                .then((res) => {
                    if (res) {
                        resolve()
                    } else {
                        reject('Movie dont exits')
                    }
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    static getMagnet(imdb_id, quality) {
        return new Promise((resolve, reject) => {
            Movie.findOne({ imdb_id }, 'magnet720p magnet1080p')
                .then((res) => {
                    if (res) {
                        if (quality === "720p") {
                            console.log('720p magnet')
                            resolve(res.magnet720p)
                        }
                        else {
                            console.log('1080p magnet')
                            resolve(res.magnet1080p)
                        } 
                    } else {
                        reject('No torrents')
                    }
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    static updateMovie(imdb_id) {
        return new Promise((resolve, reject) => {
            Movie.updateOne({ imdb_id }, { imdb_id })
                .then(() => {
                    resolve('Updated')
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    static cronMovies() {
        const path = '/sgoinfre/goinfre/Perso/cdelahay/hypertube-movies/';
        return new Promise((resolve, reject) => {
            Movie.find()
                .then((res) => {
                    res.forEach((movie) => {
                        const newDate = new Date(movie.updatedAt.setMonth(movie.updatedAt.getMonth() + 1));
                        const now = new Date;
                        if (newDate < now) {
                            if (fs.existsSync(path + movie.imdb_id + '_720p')) fs.unlinkSync(path + movie.imdb_id + '_720p')
                            if (fs.existsSync(path + movie.imdb_id + '_1080p')) fs.unlinkSync(path + movie.imdb_id + '_1080p')
                            Movie.deleteOne({ imdb_id: movie.imdb_id })
                                .catch(console.log)
                        }
                    });
                })
                .catch((err) => {
                    reject(err)
                })
        })
        
    }
}

export { MovieManager }