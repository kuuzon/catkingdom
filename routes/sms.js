//Import packages
require('dotenv').config();
const Nexmo = require('nexmo');

//Import express
const express = require('express');
const router = express.Router();

//Initialise Nexmo
const nexmo = new Nexmo({
    apiKey: process.env.NEXMOAPIKEY,
    apiSecret: process.env.NEXMOAPISECRET,      
}, {debug: true});

//SMS Route
router.post('/', (req, res) => {
    //Nexmo POST
    const text = req.body.name + ': ' + req.body.message;
    const toNumber = process.env.NEXMOTESTMOBILE;

    nexmo.message.sendSms(
        // Nexmo SendSMS Method: virtual number to send from, phone number to send to, message & then promsie
        'CatKingdom', toNumber, text, {type : 'unicode'},
        (err, responseData) => {
            if(err){
                //Failed response
                console.log(err)
                res.status(500).send('Sending error message...');
            } else {
                //Success response
                console.dir(responseData);
                res.status(200).send('The SMS has been sent!')
            }
        }
    )
});

module.exports = router;