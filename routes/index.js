const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home', desktop: false });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us', desktop: false });
});

module.exports = router;
