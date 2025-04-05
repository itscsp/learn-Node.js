exports.get404 = (req, res, next) => {
    res.status(404).render('404', {
      pageTitle: 'Page Not Found',
      path: '/404' // or leave empty if you don’t want to highlight any nav
    });
  };
  