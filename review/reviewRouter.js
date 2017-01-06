const express = require('express');

class ReviewRouter extends express.Router {
    constructor(reviewService) {
	super();
	
	this.get('/', (req, res) => {
	    res.json(reviewService.getAll());
	});

	this.post('/', (req, res) => {
	    const content = req.body.content;
	    const score = req.body.score;
	    const relatedItemId = req.body.relatedItemId;
	    
	    console.log(`Creating review: ${content}, ${score}, ${relatedItemId}`);
	    res.status(201).send(reviewService.createReview(content, score, relatedItemId));
	});

	this.route('/:id').get((req, res) => {
	    res.send(reviewService.getById(req.params.id));
	});

	this.route('/:id').put((req, res) => {
	    res.send(reviewService.update(req.params.id, req.body));
	});

	this.route('/:id').delete((req, res) => {
	    reviewService.delete(req.params.id);
	    res.json(reviewService.getAll());
	});
    }
}

module.exports = ReviewRouter;
