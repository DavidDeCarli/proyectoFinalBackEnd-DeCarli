const { products } = require('../data/data')

class Products {
  static lastProductId = products[products.length - 1].id;
  
  constructor() {
    this.list = products;
  }

  getAll() {
    return this.list;
  }

  getById(productId) {
    return this.list.find(product => product.id === +productId);
  }

  save(product) {
    const { name, description, codigo, price, image, stock } = product;
    if ( !name || !description || !price || !image) {
      return null;
    }
    Products.lastProductId++;
    const newProduct = {
      id: Products.lastProductId,
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
    this.list.push(newProduct);
    return newProduct;
  };

  updateById(productId, product) {
    const productIndex = this.list.findIndex((producto) => producto.id === +productId);
    if (productIndex < 0) return null;
    const {
      name,
      description,
      codigo,
      price,
      image,
      stock
    } = product;
    const updatedProduct = {
      id: this.list[productIndex].id,
      productos: {
        name,
        description,
        codigo,
        price,
        image,
        stock
      }
    };
    this.list[productIndex] = updatedProduct;
    return updatedProduct;
  }

  deleteById(productId) {
    const productIndex = this.list.findIndex((producto) => producto.id === +productId);
    if (productIndex < 0) return null;
    return this.list.splice(productIndex, 1);
  }
}

module.exports = Products;