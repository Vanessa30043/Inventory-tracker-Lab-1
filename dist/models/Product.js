export class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    //*PRODUCT DETAILS BELOW// METHODS STATED BELOW:
    displayDetails() {
        return `SKU: ${this.sku}, Name: ${this.name}, 
            Price: $${this.price.toFixed(2)}`;
    }
    getPriceWithTax() {
        return this.price;
    }
}
//# sourceMappingURL=Product.js.map