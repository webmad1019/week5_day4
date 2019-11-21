const express = require('express')
const router = express.Router()

const multer = require('multer')
const Picture = require('../models/picture.model')
const upload = multer({ dest: './public/uploads/' })


router.get('/', (req, res) => {
    Picture.find()
        .then(allPictures => res.render("images/index", { pictures: allPictures }))
        .catch(err => console.log(err))
})

router.get('/upload', (req, res) => res.render("images/upload"))
router.post('/upload', upload.single('imgFile'), (req, res) => {            // .single('nombreInput')

    console.log('La información que MULTER deja en req.file es:', req.file)

    Picture.create({ name: req.body.imgName, path: `/uploads/${req.file.filename}`, originalName: req.file.originalname })
        .then(() => res.redirect('/images'))
        .catch(err => console.log(err))
})

module.exports = router