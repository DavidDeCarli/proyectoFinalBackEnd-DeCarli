const path = require('path');
const express = require('express');
const apiRoutes = require('./routers/app.routers');

const { engine } = require('express-handlebars');
const Products = require('./model/Products');
const Carrito = require('./model/Carrito');
const { admin } = require('./data/config')

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

//Routes
app.use('/api', apiRoutes);

const products = new Products();
const carrito = new Carrito();

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: path.resolve(__dirname, './views/layouts'),
    partialsDir: path.resolve(__dirname, './views/partials'),
    helpers: {
        deleteProductById: async (cartId, productId) => {
            await carrito.deleteProduct(cartId, productId);
        },
        agregar: async (productId, name, description, codigo, price, image, stock) => {
            const products = carrito.getAll();
            const info = {
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
            }

            await carrito.save(productId, info);
        }
    }
}));

app.set('views', './views');
app.set('view engine', 'hbs');

// Permisos

app.get('/productos', (req, res) => {
    res.render('index', { mostrarProductos: true, products: products.getAll(), admin});
});

app.get('/:id/carrito', async (req, res) => {
    const { id } = req.params;
    const products = await carrito.getById(id);

    res.render('index', { carrito: true, mostrarProductos: true, products: products.productos, admin, id });
});

const connectedServer = app.listen(PORT, ()=> {
    console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
    console.error('Error: ', error);
});