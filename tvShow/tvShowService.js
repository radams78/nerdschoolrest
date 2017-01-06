class TvShowService {
    constructor() {
	this.tvShows = [
	    {
		"id": 1,
		"name": "Mr.Robot",
		"genre": "Drama"
	    },
	    {
		"id": 2,
		"name": "Black Mirror",
		"genre": "Drama"
	    }
	];
    }
    getAll() {
	return this.tvShows;
    }
    getById(id) {
	return this.tvShows.find(tvShow => tvShow.id == id);
    }
}

module.exports = TvShowService;
