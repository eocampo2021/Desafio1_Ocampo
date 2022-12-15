class ProductManager {
    products;
    constructor() {
      this.products = [];
      this.product = Product;
    }

class Product extends ProductManager{
  constructor (tittle, description, price, thumbnail, code, stock){
  super()  
  this.title = title;
  this.description = description;
  this.price = description;
  this.thumbnail = thumbnail;
  this.code = code;
  this.stock = stock;
  }
}

    addProduct(product) {
        if(!product) return false;
        if (this.alReadyExist(product)) throw
        this.product.push (product);
    }
     alReadyExist(product){
        return (this.getProducts().find( actual => product.code == actual.code) !== undefined )
     } 

    getProducts() {
     return this.products;
    }

    getProductById() {
     let product = this.getProducts().find(actual => id == actual.id);
    }
  }
