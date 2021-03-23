class Cart {
    constructor(customer) {
	if(customer != undefined && typeof customer == "string") {
            let customerName = customer;
            let totalCost = 0;
	    let products = [];
            this.getCustomerName = () => customerName;
            this.getTotalCost = () => totalCost;
            this.getProducts = () => {
		let copyOfProducts = [];
		let copyOfProduct = {};
		for(let product of products) {
		    copyOfProduct = {};
	            copyOfProduct.name = product.name;
		    copyOfProduct.quantity = product.quantity;
		    copyOfProduct.price = product.price;
                    copyOfProducts.push(copyOfProduct);
		}
		return copyOfProducts;
            }
	    this.addToCost = (value) => {totalCost += value;}
            this.appendToProducts = (product) => {products.push(product);};
	    this.removeFromProducts = (position) => {products.splice(position,1
	    );};
	} else {
            throw new TypeError("The name of the customer must be a string.",
            "/sales/sales.js");
        }
    }
}

Cart.prototype.add = function(product) {
    let products = this.getProducts();
    for(let it=0;it<products.length;++it) {
        if(product.name == products[it].name) {
	    this.addToCost(-(products[it].quantity * products[it].price));
            product.quantity += products[it].quantity;
            this.removeFromProducts(it);
	    break;
	}
    }
    this.addToCost(product.quantity * product.price);
    this.appendToProducts(product);
}

Cart.prototype.remove = function(product) {
    if(product != undefined && typeof product == "string") {
        let products = this.getProducts();
	for(let it=0;it<products.length;++it) {
            if(product == products[it].name) {
                this.addToCost(-(products[it].quantity * products[it].price));
                this.removeFromProducts(it);
                break;
	    }
	}
    } else {
        throw new TypeError("The name of the product must be a string.",
        "/sales/sales.js");
    }
}

class CartFactory {
    static create(customer) {
	return new Cart(customer);
    }
}

module.exports = {
    CartFactory: CartFactory
}
