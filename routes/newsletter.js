//Import packages
require('dotenv').config();
const express = require('express');
const request = require('request');
const router = express.Router();

//Signup Route
router.post('/', (req, res) => {
    console.log(req.body);
    
    const { firstName, lastName, email } = req.body;
    console.log(firstName + ' ' + lastName );
    console.log(email);
  
    if (!firstName || !lastName || !email){
      // Header message
      res.status(400).send('Please ensure that all fields are filled out correctly');
      return; 
    }
    
    // Construct req data 
    const data = {
      members: [
        { 
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          }
        }
      ]
    }
    
    console.log(data);
    const postData = JSON.stringify(data);
    // console.log(postData);
    
    const options = {
      url: 'https://us8.api.mailchimp.com/3.0/lists/b13c681eba',
      method: 'POST',
      headers: {
        Authorization: process.env.AUTHORIZATION
      },
      body: postData
    }
    
    request(options, (err, response, body) => {
      console.log(response.statusCode);
      console.log(response.statusMessage);
      
      if(err) {
        console.log(err);
        res.status(400).send(err)
      } else {
        // console.log(response);
        if(response.statusCode === 200 ) {
          res.status(200).send('You have successfully signed up to our newsletter')
        } else {
          console.log('200 else');
          console.log(err);
          res.status(500).send(err);
        }
      }
    })
});

//Export route
module.exports = router;