const express = require('express')
require('dotenv').config();
const nodemailer = require('nodemailer');
const router = express.Router();

//Email route
router.post('/', (req, res) => {
    console.log(req.body);
    //Body of auto-email
    const output = `
    <p>You have a new contact request </p>
    <h3>Contact Details </h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message text: </h3>
    <p>${req.body.message} </p>
    `;

    //Create transport object
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,  
        //Defines whether to use SSL or, if false, not                
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        tls: {
            rejectUnauthorized: false    
            //True: server will reject any connection not authorised with supplied list
        }
    });

    //Mail options
    let mailOptions = {
        //Sender address
        from: process.env.EMAIL,
        //Receiver address                            
        to: 'abicknell3@student.holmesglen.edu.au',        
        subject: 'CatKingdom contact request',
        html: output
    };

    //Send Email Message (info callback contains our form information)
    transporter.sendMail(mailOptions, (err, info) => {
        console.log('Sending email...')
        if(err) {
            console.log('Errors: ', err);
            res.status(400).send(err)
        } else {
            console.log('Message sent: %s', info.messageId);
            console.log('Email sent.  Success.');
            res.status(200).send('Your message has been successfully sent.  Thank you for your feedback!');
        };
    });

});

//Export route module
module.exports = router;