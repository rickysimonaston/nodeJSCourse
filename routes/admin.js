const path = require('path');
const express = require('express');
const router = express.Router();

// Own Modules
const rootDir = require('../util/path');

const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    addTitle: 'Add Product',
    path: '/admin/add-product',
    pageTitle: 'Add Product',
    formsCSS: true,
    productCSS: true,
    activeProduct: true
  });
});

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
