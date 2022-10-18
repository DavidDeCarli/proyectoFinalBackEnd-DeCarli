const { Console } = require('console');
const fs = require('fs');
const path = require('path');

class Carrito {
    archivo = path.resolve(__dirname, './../data/carrito.json');

    async getAll(){
        let carrito = await fs.promises.readFile(this.archivo, 'utf-8');
        let carritoJson = JSON.parse(carrito);
        return carritoJson;
    };

    // Borra un carrito completo
    async deleteById(id){
        try {
            let carrito = await fs.promises.readFile(this.archivo, 'utf-8');
            let carritoJson = JSON.parse(carrito);
            let posicion = carritoJson.findIndex(element => element.id == id)
            if(posicion >= 0){
                carritoJson.splice(posicion, 1)
                await fs.promises.writeFile(this.archivo, JSON.stringify(carritoJson));
            }
            return carritoJson
        } catch(error){
            console.log(error);
        }
    };

    async getById(id){
        try {
            let carrito = await fs.promises.readFile(this.archivo, 'utf-8');
            let carritoJson = JSON.parse(carrito);
            let contenidoExtraidoDelArray;
            carritoJson.forEach(element => {
                if(element.id == id){
                    contenidoExtraidoDelArray = element;
                }
            });
            return contenidoExtraidoDelArray;
        } catch(error){
            console.log(error);
        }
    };

    async save(carritoId, informacion){
        try {
            let carrito = await fs.promises.readFile(this.archivo, 'utf-8');
            let carritosJson = JSON.parse(carrito);
            let carritoIndex = false;

            carritosJson.forEach((carrito, i) => {
                if(carrito.id == carritoId){
                    carritoIndex = i;
                }
            });

            carritosJson[carritoIndex].productos.push(informacion);

            await fs.promises.writeFile(this.archivo, JSON.stringify(carritosJson));
            return informacion;
        } catch(error){
            console.log(error);
        }
    };

    async deleteAll(){
        await fs.promises.writeFile(this.archivo, JSON.stringify([]));
        let carritoJson = await fs.promises.readFile(this.archivo, 'utf-8');
        return carritoJson;
    };

    async deleteProduct(idCarrito, idProducto){
        if (!idCarrito && !idProducto) return false
        try {
            let carritos = await fs.promises.readFile(this.archivo, 'utf-8');
            let carritosJson = JSON.parse(carritos);
            let carritoIndex = false;

            carritosJson.forEach((carrito, i) => {
                if(carrito.id == idCarrito){
                    carritoIndex = i;
                }
            });

            let productoIndex = false;

            carritosJson[carritoIndex].productos.forEach((producto, i) => {
                if(producto.id == idProducto){
                    productoIndex = i
                }
            });

            carritosJson[carritoIndex].productos.splice(productoIndex, 1);

            await fs.promises.writeFile(this.archivo, JSON.stringify(carritosJson));

            fs.close();

            return carritoEncontrado;
        } catch(error){
            console.log(error);
        }
    };
};

module.exports = Carrito;