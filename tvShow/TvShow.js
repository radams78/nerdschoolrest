class TvShow {
    constructor(id, name, genre, host) {
	this.id = id;
	this.name = name;
	this.genre = genre;
	this.reviews = "http://" + host + "/tvShow/" + id + "/review";
    }
}

module.exports = TvShow;
