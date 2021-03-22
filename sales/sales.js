class Cart {
    constructor(customer) {
	if(customer != undefined && typeof customer == "string") {
            let customerName = customer;
            let totalCost = 0;
	    let products = [];
            this.getCustomerName = () => customerName;
            this.getTotalCost = () => totalCost;
            this.getProducts = () => products;
	} else {
            throw new TypeError("The name of the customer must be a string.",
            "/sales/sales.js");
        }
    }
}

class CartFactory {
    static create(customer) {
	return new Cart(customer);
    }
}

let myCart = CartFactory.create("My Name");
console.log(myCart);
console.log(myCart.customerName);

module.exports = {
    CartFactory: CartFactory
}
