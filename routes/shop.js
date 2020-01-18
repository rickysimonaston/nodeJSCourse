const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

// Home page routes
router.get("/", shopController.getIndex);
// Products list route
router.get("/products", shopController.getProducts);
// Single product detail route
router.get("/products/:productId", shopController.getProduct);
// Route to cart page
router.get("/cart", shopController.getCart);
// Route to cart page to get product id
router.post("/cart", shopController.postCart);

router.post("/cart-delete-item", shopController.postCartDeleteProduct);
// Route to orders page
router.get("/orders", shopController.getOrders);
// Route to checkout page
router.get("/checkout", shopController.getCheckout);

module.exports = router;
