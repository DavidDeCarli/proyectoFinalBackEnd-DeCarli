const products = [
  {
    id: 1,
    timestamp: '16/10/2022 00:00:00',
    nombre: 'Escuadra',
    descripcion: 'Escuadra que sirve para escuadrar escuadras dentro de una zona escuadrada',
    codigo: '2e2ad6d784514dc5b3cdfa181f7471a8',
    precio: 323.45,
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Squadra_45.jpg',
    stock: 5
  },
  {
    id: 2,
    timestamp: '16/10/2022 00:00:00',
    nombre: 'Calculadora',
    descripcion: 'Te calcula hasta la probabilidad de que tu crush te hable en las proximas 24 horas',
    codigo: '6a15f6d73e024c4499cf50b8f469f061',
    precio: 234.56,
    imagen: 'https://exitocol.vtexassets.com/arquivos/ids/257195/Calculadora-Cientifica-Graficadora-Texas-Ti-nspire-cxcas-3d.jpg?v=637002371419830000',
    stock: 5
  },
  {
    id: 3,
    timestamp: '16/10/2022 00:00:00',
    nombre: 'Globo Terráqueo',
    descripcion: 'Modelo convencional del planeta con vista en alto relieve. Revive todas las verguenzas que has pasado en este planeta como nunca antes!',
    codigo: '6f28c39299fd44e5a6d988c2b594cd71',
    precio: 45.67,
    imagen: 'https://panamericana.vteximg.com.br/arquivos/ids/256800-600-690/globo-terraqueo-politico-40-cm-7701016736787.jpg?v=636381897120030000',
    stock: 5
  },
  {
    id: 4,
    timestamp: '16/10/2022 00:00:00',
    nombre: 'Paleta Pintura',
    descripcion: 'Paleta de pintura utilizada por el mismo Picasso, por eso es tan cara!',
    codigo: '3dd2d163fd0348f08f1aeff736ee4290',
    precio: 456.78,
    imagen: 'https://www.redlibrera.com/product_images/z/119/paleta__43840_zoom.jpg',
    stock: 5
  },
  {
    id: 5,
    timestamp: '16/10/2022 00:00:00',
    nombre: 'Reloj',
    descripcion: 'Da la hora y la actualiza, que mas quieres saber?',
    codigo: '5f94157bf36d4fdc982412cd3dfbef59',
    precio: 67.89,
    imagen: 'https://us.123rf.com/450wm/monticello/monticello1911/monticello191100379/135078958-reloj-de-pared-aislado-sobre-fondo-blanco-nueve-.jpg?ver=6',
    stock: 5
  },
  {
    id: 6,
    timestamp: '16/10/2022 00:00:00',
    nombre: 'Agenda',
    descripcion: 'Escribe esas notas de amor pendientes en tu nueva Agenda y olvidate de lo electronico!',
    codigo: '31243ff05f754c1cbc918bde17e36a32',
    precio: 78.90,
    imagen: 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/AGYRBXKZQH6C4KYQU6IGD2BDIE.jpg',
    stock: 5
  },
  {
    id: 7,
    timestamp: '16/10/2022 00:00:00',
    nombre: 'Escudo caballero templario',
    descripcion: 'Te protege hasta de las vergüenzas que puedas llegar a pasar',
    codigo: 'c8545b0387d3449ab4c833597a2086c9',
    precio: 456.78,
    imagen: 'https://www.tienda-medieval.com/blog/wp-content/uploads/2010/09/escudo_templario1.jpg',
    stock: 5
  },
  {
    id: 8,
    timestamp: '16/10/2022 00:00:00',
    nombre: 'Escorpión de juguete',
    descripcion: 'No es venenoso y si te pica sólo te duele el bolsillo',
    codigo: 'a386275f98f04a8ab3d786b6d390fff4',
    precio: 1000.87,
    imagen: 'https://sc04.alicdn.com/kf/H5794a667d8844b0592a7a76e8724842bt.jpg',
    stock: 5
  },
]

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
    const { nombre, timestamp, descripcion, codigo, precio, imagen, stock } = product;
    if ( !nombre || !descripcion || !precio || !imagen) {
      return null;
    }
    Products.lastProductId++;
    const newProduct = {
      id: Products.lastProductId,
      timestamp,
      nombre,
      descripcion,
      codigo,
      precio,
      imagen,
      stock
    };
    this.list.push(newProduct);
    return newProduct;
  };

  updateById(productId, product) {
    const productIndex = this.list.findIndex((producto) => producto.id === +productId);
    if (productIndex < 0) return null;
    const {
      nombre,
      timestamp,
      descripcion,
      codigo,
      precio,
      imagen,
      stock
    } = product;
    const updatedProduct = {
      id: this.list[productIndex].id,
      timestamp,
      nombre,
      descripcion,
      codigo,
      precio,
      imagen,
      stock
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