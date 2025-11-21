import { Product } from "./Product.js";
export class PhysicalProduct extends Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    get heaviness() {
        return `${this.weight} lbs`;
    }
    getPriceWithTax() {
        return this.price + this.price * .10;
    }
}
//# sourceMappingURL=PhyscalProduct.js.map