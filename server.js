const express = require('express')
const morgan = require('morgan')

const port = 3000;

const app = express()
app.use(morgan('dev'))
app.get('/', (request, response) => response.send('Hello World'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
