const express = require('express'),
    router = express.Router();

//google
router.get("/google", (req, res) => {
    res.send(req.user)
});

module.exports = router;