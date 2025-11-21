import { Product } from "./Product.js";
export class PhysicalProduct extends Product {
    _weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this._weight = weight;
    }
    get weight() {
        return `${this._weight} kg`;
    }
    getPriceWithTax() {
        return this.price + this.price * .10;
    }
    displayDetails() {
        return `${super.displayDetails()} Weight: ${this.weight}`;
    }
}
//# sourceMappingURL=PhyscalProduct.js.map