const Review = require('./Review');
const createId = require('../utils/idUtil');

class ReviewService {
    constructor() {
	this.reviews = [];
    }

    getAll() {
	return this.reviews;
    }

    getById(id) {
	return this.reviews.find(review => review.id === id);
    }

    getByRelatedItemId(tvShowId) {
	return this.reviews.filter(review => review.relatedItemId === tvShowId);
    }

    createReview(content, score, relatedItemId) {
	const newReview = new Review(createId(), content, score, relatedItemId);
	this.reviews.push(newReview);
	return newReview;
    }

    update(id, fields) {
	const review = this.reviews.find(review => review.id === id);
	Object.assign(review, fields);
	return review;
    }

    delete(id) {
	this.reviews = this.reviews.filter(review => review.id != id);
    }

}

module.exports = new ReviewService();
