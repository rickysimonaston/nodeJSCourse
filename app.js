// Core Modules
const path = require('path');
// 3rd party modules
const express = require('express');
const bodyParser = require('body-parser');

// Create Express app
const app = express();
// Add Templating Engine
app.set('view engine', 'ejs');
app.set('views', 'views'); // This is the default option. only change if you using a different name

// Admin Routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//middleware;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes for admin
app.use('/admin', adminData.routes);
// Routes for UI
app.use(shopRoutes);

// 404 error page
app.use((req, res, next) => {
  res.status(404);
  res.render('404', { pageTitle: '404 Error' });
});

// Create server and listen
app.listen(3000);
