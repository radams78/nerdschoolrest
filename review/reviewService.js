const Review = require('./Review');
const createId = require('../utils/idUtil');

class ReviewService {
    constructor() {
	this.reviews = [];
    }

    getAll() {
	return this.reviews;
    }

    createReview(content, score, relatedItemId) {
	const newReview = new Review(createId(), content, score, relatedItemId);
	this.reviews.push(newReview);
	return newReview;
    }
}

module.exports = new ReviewService();
