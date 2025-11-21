import { Product } from "./Product.js";
export class DigitalProduct extends Product {
    _fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this._fileSize = fileSize;
    }
    get fileSize() {
        return `${this._fileSize} gb`;
    }
    getPriceWithTax() {
        return this.price;
    }
    displayDetails() {
        return `${super.displayDetails()} fileSize: ${this.fileSize}`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map