let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/About', function(req, res, next) {
  res.render('index', { title: 'About' });
});
router.get('/Produts', function(req, res, next) {
  res.render('index', { title: 'Produts' });
});
router.get('/Services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
 