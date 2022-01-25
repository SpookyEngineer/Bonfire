const PORT = 8000; // Port that will run in

const axios = require('axios'); // Calling the packages
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express');
const res = require('express/lib/response');
const cors = require('cors'); //Require cors to run in localhost

const app = express(); // Declaring the app
app.use(cors()); // App use cors

const url = 'https://www.theguardian.com/international'

app.get('/', function(req, res){
    res.json('This is a web scraper')
})

app.get('/results', function(req, res){
    axios(url)  // Scraping the url
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        $('.fc-item__title', html).each(function(){ // The class being scraped and being pushed into variables
            const title = $(this).text() // Grabing the text 
            const url = $(this).find('a').attr('href') // Grabing the links
            articles.push({
                title,
                url
            })
        })
        res.json(articles)
    }).catch(err => console.log(err)) // Catch in case of error
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))