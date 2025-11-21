import { PhysicalProduct } from "./models/PhyscalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
//import { Product } from "./models/Product.js";
const planner = new PhysicalProduct("001", "Planner", 25, 2); //sku ,Name, price, weight 
const digitalPlanner = new DigitalProduct("002", "DigitalPlanner", 10, 50); //sku, Name, price, file size
const products = [planner, digitalPlanner]; //created a product array
for (const product of products) {
    console.log(product.displayDetails());
    console.log("Price with tax:", product.getPriceWithTax());
    console.log("--------------------------------");
}
//# sourceMappingURL=main.js.map