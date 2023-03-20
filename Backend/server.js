const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/getUniversity', (req, res) => {
    request(
        {url: 'https://run.mocky.io/v3/86344593-32e6-4525-a225-1f0df23dd90d'},
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({type: 'error', message: err.message});
            }

            res.json(JSON.parse(body));
        }
    )
});

app.get('/getCategories', (req, res) => {
    request(
        {url: 'https://run.mocky.io/v3/39dd1782-ae4b-4cf8-8e18-a1dea3c8a920'},
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({type: 'error', message: error.message});
            }

            res.json(JSON.parse(body));
        }
    )
});

const PORT = 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

