import { Product } from "./Product.js";

export class PhysicalProduct extends Product{
private _weight:number;
        constructor (sku:string, name:string , price: number, weight: number ){
                super(sku,name,price)
                this._weight=weight;
        }

get weight(): string{
    return `${this._weight} kg` 
}

getPriceWithTax():number{
    return this.price + this.price * .10
}
displayDetails(): string {
        return `${super.displayDetails()} Weight: ${this.weight}`;
      }
}