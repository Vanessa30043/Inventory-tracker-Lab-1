import { Product } from "./Product.js";

export class DigitalProduct extends Product{

        constructor (sku:string, name:string , price: number,private fileSize: number ){
                super(sku,name,price)
        }

get fileSizeA(): string{
    return `${this.fileSize} lbs`
}

getPriceWithTax():number{
    return this.price 
}

}