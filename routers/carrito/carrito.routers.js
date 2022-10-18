const express = require('express');
//const { products } = require('../../data/data');
const { admin } = require('../../data/config');
const Carrito = require('../../model/Carrito');

const router = express.Router();

// Routes
router.get('/', (req, res) => {
    const carrito = new Carrito();
    const lista = carrito.getAll();
    return res.json(lista);
});

router.get('/:carritoId/productos', (req, res) => {
    const carrito = new Carrito();
    const id = req.params.id;
    const lista = carrito.getById(id);
    return res.json(lista);
});

router.get('/:productId/productos', (req, res) => {
    const carrito = new Carrito();
    const id = req.params.id;
    const lista = carrito.getById(id);
    return res.json(lista);
});

router.post('/:carritoId/productos', (req, res) => {
    // const admin = req.headers.admin || false;

    if (!admin){
        return res.status(400).json({ succes: false, error: 'You do not have permission to access this route' });
    }

    const { carritoId } = req.params;
    const { name, description, codigo, price, image, stock } = req.body;
    if (!name || !description || !codigo || !price || !image || !stock) {
        return res.status(400).json({ succes: false, error: 'Wrong body format' });
    }

    const carrito = new Carrito();
    const products = carrito.getAll();

    const newProduct = {
        id: products.length + 1,
        timestamp: Date.now(),
        productos: {
            name,
            description,
            codigo,
            price,
            image,
            stock
        }
    };

    carrito.save(carritoId, newProduct);
    
    return res.json(carritoId, newProduct);
});

router.delete('/:carritoId', (req, res) => {
    // const admin = req.headers.admin || false;

    if (!admin){
        return res.status(400).json({ succes: false, error: 'You do not have permission to access this route' });
    }

    const { carritoId } = req.params;
    const carrito = new Carrito();

    carrito.deleteById(carritoId);
    return res.json({ success: true, result: 'product correctly eliminated' });
});

router.delete('/:carritoId/productos/:productoId', (req, res) => {
    // const admin = req.headers.admin || false;

    if (!admin){
        return res.status(400).json({ succes: false, error: 'You do not have permission to access this route' });
    }

    const { carritoId, productoId } = req.params;
    const carrito = new Carrito();

    carrito.deleteProduct(carritoId, productoId);
    return res.json({ success: true, result: 'product correctly eliminated' });
});

module.exports = router;