import { Product } from "./Product.js";

export class PhysicalProduct extends Product{

        constructor (sku:string, name:string , price: number,private weight: number ){
                super(sku,name,price)
        }

get heaviness(): string{
    return `${this.weight} lbs` 
}

getPriceWithTax():number{
    return this.price + this.price * .10
}

}