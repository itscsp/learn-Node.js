const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    console.log('req.session.isLoggedIn:', req.session.isLoggedIn)
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        isAuthenticated: false,
    });
}

exports.postLogin = (req, res, next) => {
    User.findById('5bab316ce0a7c75f783cb8a8')
    .then(user => {
        req.session.isLoggedIn = true
      req.session.user = user;
      res.redirect('/')
    })
    .catch(err => console.log(err));


}