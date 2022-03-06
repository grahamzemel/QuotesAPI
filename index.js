const express = require('express');
const app = express();
const quotes = require('./quotes.json');
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    res.send(JSON.stringify(quote));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});