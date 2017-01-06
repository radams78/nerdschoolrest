const TvShow = require('./TvShow');
const createId = require('../utils/idUtil');

class TvShowService {
    constructor() {
	this.tvShows = [
	    new TvShow(createId(), 'Mr.Robot', 'Drama'),
	    new TvShow(createId(), 'Black Mirror', 'Drama')
	];
    }
    
    getAll() {
	return this.tvShows;
    }
    getById(id) {
	return this.tvShows.find(tvShow => tvShow.id == id);
    }

    createTvShow(name, genre) {
	const newTvShow = new TvShow(createId(), name, genre);
	this.tvShows.push(newTvShow);
	return newTvShow;
    }
}

module.exports = new TvShowService();
