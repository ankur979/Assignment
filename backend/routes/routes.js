const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser } = require('./controllers/authController.js');
const { addProduct, updateProduct, deleteProduct, getProduct } = require('./controllers/productController.js');
const { isAuthenticatedUser } = require('../middleware/auth.js');

// Authentication routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getUser', isAuthenticatedUser, getUser);

// Product routes
router.post('/product/create', isAuthenticatedUser, addProduct);
router.put('/product/update', isAuthenticatedUser, updateProduct);
router.delete('/product/delete/:id', isAuthenticatedUser, deleteProduct);
router.get('/product/get', isAuthenticatedUser, getProduct);

module.exports = router;
