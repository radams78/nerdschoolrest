const express = require('express');
const tvShowService = require('./tvShowService');

const tvShowRouter = express.Router();

tvShowRouter.get('/', (req, res) => {
    res.json(tvShowService.getAll());
});

tvShowRouter.post('/', (req, res) => {
    res.send(tvShowService.createTvShow(req.body.name, req.body.genre));
});

tvShowRouter.route('/:tvShowId').get((req, res) => {
    res.send(tvShowService.getById(req.params.tvShowId));
});

tvShowRouter.route('/:tvShowId').put((req, res) => {
    res.send(tvShowService.update(req.params.tvShowId, req.body));
});

tvShowRouter.route('/:tvShowId').delete((req, res) => {
    tvShowService.delete(req.params.tvShowId);
    res.json(tvShowService.getAll());
});

module.exports = tvShowRouter;
