const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Desktop Home', desktop: true });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact', desktop: true });
});

module.exports = router;
