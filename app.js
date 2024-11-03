const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/layout')
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/desktop', (req, res) => {
  res.render('index', { title: 'Desktop Version' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});