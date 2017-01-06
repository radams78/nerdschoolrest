const express = require('express');
const TvShow = require('./TvShow');
const TvShowService = require('./tvShowService');

const tvShowRouter = express.Router();

const tvShowService = new TvShowService();

var tvShows = tvShowService.getAll();

tvShowRouter.get('/', (req, res) => {
    res.json(tvShows);
});
tvShowRouter.route('/:tvShowId').get((req, res) => {
    const id = req.params.tvShowId;
    
    console.log(`Fetching TV show with id: ${id}`);
    res.json(tvShowService.getById(id));
});

module.exports = tvShowRouter;
