const express = require('express');
const routes = express.Router();
const path = require('path')


routes.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..',  'views', 'home.html'))
    
})

routes.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..',  'views', 'users.html'))
})

module.exports = routes