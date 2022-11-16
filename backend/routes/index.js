var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
require('dotenv').config()

const apiKey = process.env.REACT_APP_API_KEY

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`).then(res => res.json()).then(data => {res.json({movies: data.results}); console.log(data)})
})

module.exports = router;