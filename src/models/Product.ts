export abstract class Product{
        sku: string;
        name: string;
        price: number;

        constructor (sku:string, name:string , price: number){
            this.sku =sku;
            this.name = name;
            this.price = price;
        }

        //*PRODUCT DETAILS BELOW// METHODS STATED BELOW:

        displayDetails():string{
            return`SKU: ${this.sku}, Name: ${this.name}, 
            Price: $${this.price.toFixed(2)}`;
        }   
     

        getPriceWithTax():number{
            return this.price;
        }


}
