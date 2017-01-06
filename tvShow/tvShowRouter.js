const express = require('express');
const TvShow = require('./TvShow');
const TvShowService = require('./tvShowService');

const tvShowRouter = express.Router();

const tvShowService = new TvShowService();

var tvShows = tvShowService.getAll();

tvShowRouter.get('/', (req, res) => {
    res.json(tvShows);
});
module.exports = tvShowRouter;
