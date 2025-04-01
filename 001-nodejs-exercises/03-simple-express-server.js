const express = require('express');
const app = express();

const {homePage} = require('./controllers/homeController')
const {aboutPage} = require('./controllers/aboutController');
const {users} = require('./controllers/usersController')

app.get('/', homePage)
app.get('/about', aboutPage)
app.get('/users', users)


app.listen(3000, ()=>console.log('Server running on port 3000'))