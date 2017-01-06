const express = require('express');

class TvShowRouter extends express.Router {
    constructor(tvShowService, reviewService) {
	super();

	this.get('/', (req, res) => {
	    res.json(tvShowService.getAll());
	});

	this.post('/', (req, res) => {
	    res.send(tvShowService.createTvShow(req.body.name, req.body.genre, req.headers.host));
	});

	this.route('/:tvShowId').get((req, res) => {
	    res.send(tvShowService.getById(req.params.tvShowId));
	});

	this.route('/:tvShowId').put((req, res) => {
	    res.send(tvShowService.update(req.params.tvShowId, req.body));
	});

	this.route('/:tvShowId').delete((req, res) => {
	    tvShowService.delete(req.params.tvShowId);
	    res.json(tvShowService.getAll());
	});

	this.route('/:tvShowId/review').get((req, res) => {
	    res.json(reviewService.getByRelatedItemId(req.params.tvShowId));
	});
    }
}

module.exports = TvShowRouter;
