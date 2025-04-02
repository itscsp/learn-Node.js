/**
 * Assignment
 * Task 1: Create a npm project and install Express.js
 * Task 2: Create an Express.js app which serves two HTML files for "/" and "/users".
 * Task 3: Add some static files to your project that should be required by at least one of your HTML files 
 */

const path = require('path')
const express = require('express')
const app = express();

const homeRoutes = require('./routes/route')

//Create middleware to server traffic

app.use(homeRoutes);

app.use('', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000, () =>{
    console.log('Server runing on port 3000')
})