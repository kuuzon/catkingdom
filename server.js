//Imported packages
const express = require('express');

//Import route modules
const newsletterRoutes = require('./routes/newsletter');
const emailRoutes = require('./routes/email');
const statusRoutes = require('./routes/status');

//Init application
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes Middleware (Refactored into Routes folder)
app.use('/signup', newsletterRoutes);
app.use('/contact', emailRoutes);
app.use('/status', statusRoutes);

//Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port: ${PORT}`));

//Iteration notes:
//[1] Add Nexmo functionality
//[2] Add SEO/Analytics functionality
//[3] Add further functionality to home page catalogue (maybe integrate Flickr API / https://thecatapi.com/ endpoint to home catalogue, so it live updates (ONLY IF THERE IS TIME))