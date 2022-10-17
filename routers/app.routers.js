const express = require('express');
const productsRoutes = require('./products/products.routes');
const usersRoutes = require('./users/users.routes');
const carritoRoutes = require('./carrito/carrito.routers');

const router = express.Router();

router.use('/products', productsRoutes);
router.use('/users', usersRoutes);
router.use('/carrito', carritoRoutes);

module.exports = router;