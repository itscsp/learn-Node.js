require('dotenv').config();
 
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');//enable HTTP methods such as PUT and DELETE
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')

const connectDB = require('./server/config/db');
const session = require('express-session');
const { isActiveRoute } = require('./server/helpers/routeHelpers');

const app = express()
const PORT = 5001 || process.env.PORT

//Connect to database
connectDB();

app.use(express.urlencoded({extended:true})); //To parse form data that will come with url
app.use(express.json()) //This is used to parse json data
app.use(cookieParser())
app.use(methodOverride('_method')); 
// The method-override middleware in a Node.js project is used to enable HTTP methods such as PUT and DELETE in situations where the client (e.g., HTML forms) does not support them directly. HTML forms only support GETandPOSTmethods, making it difficult to use RESTful methods likePUTandDELETE` without additional workarounds.

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    //cookie: { maxAge: new Date ( Date.now() + (3600000) ) } 
}))

app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs')

app.locals.isActiveRoute = isActiveRoute; 

app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));


app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}`)
})