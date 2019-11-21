const express = require('express')
const router = express.Router()

const multer = require('multer')
const Movie = require('../models/movie.model')

const uploadCloud = require('../configs/cloudinary.config');




router.get('/', (req, res, next) => {
    Movie.find()
        .then((movies) => res.render('movies/index', { movies }))
        .catch((error) => console.log(error))
});

router.get('/upload', (req, res, next) => res.render('movies/upload'));
router.post('/upload', uploadCloud.single('imgFile'), (req, res, next) => {
    const { movieName, movieDesc } = req.body
    const imgPath = req.file.url
    const imgName = req.file.originalname
    Movie.create({ title: movieName, description: movieDesc, imgPath, imgName })
        .then(movie => res.redirect('/movies'))
        .catch(error => console.log(error))
});


module.exports = router