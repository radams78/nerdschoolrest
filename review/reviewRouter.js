const express = require('express');
const reviewService = require('./reviewService');

const reviewRouter = express.Router();

reviewRouter.get('/', (req, res) => {
    res.json(reviewService.getAll());
});

reviewRouter.post('/', (req, res) => {
    const content = req.body.content;
    const score = req.body.score;
    const relatedItemId = req.body.relatedItemId;

    console.log(`Creating review: ${content}, ${score}, ${relatedItemId}`);
    res.status(201).send(reviewService.createReview(content, score, relatedItemId));
});

reviewRouter.route('/:id').get((req, res) => {
    res.send(reviewService.getById(req.params.id));
});

module.exports = reviewRouter;
