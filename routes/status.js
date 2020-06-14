//Import packages
const express = require ('express');
const router = express.Router();

//Status Route
router.get('/', (req, res) => {
    res.send('The CatKingdom Server is purring!');
});

//Export router
module.exports = router;