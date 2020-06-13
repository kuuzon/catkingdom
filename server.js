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