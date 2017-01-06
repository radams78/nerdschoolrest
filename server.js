const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const tvShowService = require('./tvShow/tvShowService');
const reviewService = require('./review/reviewService');

const TvShowRouter = require('./tvShow/tvShowRouter');
const tvShowRouter = new TvShowRouter(tvShowService, reviewService);

const ReviewRouter = require('./review/reviewRouter');
const reviewRouter = new ReviewRouter(reviewService);

const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/tvshow', tvShowRouter);
app.use('/review', reviewRouter);

app.get('/', (request, response) => response.send('Hello World'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
