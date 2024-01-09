class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
        }
    
        addProduct(title, description, price, thumbnail, code, stock) {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }
    
        
        if (this.products.some(product => product.code === code)) {
            console.error("Ya existe un producto con ese código");
            return;
        }
    
        
        const newProduct = {
            id: this.productIdCounter++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
    
        this.products.push(newProduct);
        console.log(`Producto agregado: ${newProduct.title}`);
        }
    
        getProducts() {
        return this.products;
        }
    
        getProductById(id) {
        const foundProduct = this.products.find(product => product.id === id);
    
        if (foundProduct) {
            return foundProduct;
        } else {
            console.error("Producto no encontrado");
        }
        }
    }

  // Ejemplo prueba
    const productManager = new ProductManager();
    
    productManager.addProduct("Producto 1", "Descripcion1", 200, "imagen1.jpg", "ssss1", 50);
    productManager.addProduct("Producto 2", "Descripcion2", 300, "imagen2.jpg", "ssss2", 30);
    
    const allProducts = productManager.getProducts();
    console.log("Todos los productos:", allProducts);
    
    const productById = productManager.getProductById(1);
    console.log("Producto por ID:", productById);
    
    const nonExistentProduct = productManager.getProductById(3);