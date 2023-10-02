class ProductManager {
  constructor() {
    this.products = [];
  }

  generateId = () =>
    this.products.length === 0
      ? 1
      : this.products[this.products.length - 1].id + 1; // es lo mismo que hacer this.products.lenght + 1

  addProduct({ title, description, price, thumbnail, code, stock }) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log(`
    --------------------------------------------
    ERROR: Todos los campos deben ser rellenados --> (producto ${code})
    --------------------------------------------`);
      return;
    }

    if (this.products.some((product) => product.code === code)) {
      console.log(`
    -------------------------------------------------
    ERROR: Ya hay un producto con el código ingresado --> (producto ${code})
    -------------------------------------------------`);
      return code;
    }

    this.products.push({
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: this.generateId(),
    });
  }

  getProducts() {
    console.log(`
| PRODUCTOS:|\n`);
    return this.products;
  }

  getProductsById(id) {
    console.log(`
| BUSCANDO PRODUCTO POR ID: ${id} |
    `);
    return (
      this.products.find((product) => product.id === id) ||
      `    ----------------
    ID no encontrado
    ----------------
    `
    );
  }
}

const manager = new ProductManager();
manager.getProducts();

let productToAdd = {
  title: "Coca-Cola 2.2l",
  description: "Gaseosa Refrescante Coca-Cola 2.2lt",
  price: 750,
  thumbnail: "coke.jpg",
  code: 100,
  stock: 59,
};

let productToAdd1 = {
  title: "Pepsi 2.2l",
  description: "Gaseosa Refrescante Pepsi 2.2lt",
  price: 650,
  thumbnail: "pepsi.jpg",
  code: 101,
  stock: 47,
};

let productToAdd2 = {
  title: "Cunnington 2.2l",
  description: "Gaseosa Refrescante Cunnington 2.2lt",
  price: 550,
  thumbnail: "cunnington.jpg",
  code: 102,
  stock: 26,
};

let incompleteProductToAdd = {
  title: "",
  description: "",
  price: 300,
  thumbnail: "foto.jpg",
  code: 103,
  stock: 5,
};

let duplicateProductToAdd = {
  title: "Manaos 2.2l",
  description: "Gaseosa Refrescante Manaos 2.2lt",
  price: 500,
  thumbnail: "manaos.jpg",
  code: 100,
  stock: 8,
};

manager.addProduct(productToAdd);
manager.addProduct(productToAdd1);
manager.addProduct(productToAdd2);
manager.addProduct(incompleteProductToAdd);
manager.addProduct(duplicateProductToAdd);

console.log(manager.getProducts());

console.log(manager.getProductsById(2));
console.log(manager.getProductsById(4));
