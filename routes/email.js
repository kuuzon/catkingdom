const express = require('express')
require('dotenv').config();
const nodemailer = require('nodemailer');
const router = express.Router();

//Email route
router.post('/form', (req, res) => {
    console.log(req.body);
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

    //Step 1: Create a transport object
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,                  //Defines whether to use SSL or, if false, not
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        tls: {
            rejectUnauthorized: false    //If true, server will reject any connection not authorised with supplied list
        }
    });

    //Step 2: Create mail options
    let mailOptions = {
        from: process.env.EMAIL,                            //Sender address
        to: 'abicknell3@student.holmesglen.edu.au',        //Receiver address
        subject: 'Node contact request',
        html: output
    };

    //Step 3: Send Email Message
    transporter.sendMail(mailOptions, (error, info) => {
        console.log('Sending email...')
        if(error) {
            return console.log('Errors: ', error);
        } else {
            console.log('Message sent: %s', info.messageId);
            console.log('Email sent.  Success.')
        }
    });

});

//Export route module
module.exports = router;