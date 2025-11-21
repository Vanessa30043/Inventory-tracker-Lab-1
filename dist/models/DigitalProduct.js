import { Product } from "./Product.js";
export class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    get fileSizeA() {
        return `${this.fileSize} lbs`;
    }
    getPriceWithTax() {
        return this.price;
    }
}
//# sourceMappingURL=DigitalProduct.js.map