const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

// Home route
router.get('/', songController.getUploadedSongs);

// About route
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
