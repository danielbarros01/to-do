const express = require('express'),
    router = express.Router();

//Home
router.get('/', (req, res) => {
    res.render('index');
})

module.exports = router;