//Import packages/modules
const express = require ('express');
const router = express.Router();

//Status Route
router.get('/', (req, res) => {
    res.send('Hello I am a server and I am running');
});

//Export router
module.exports = router;