class mockDatabase {
    constructor() {
        this.data = {"leaf blowers": {"quantity": 9, "price": 95},
                     "Videocassette recorders": {"quantity": 63, "price": 57},
                     "sailboats": {"quantity": 16, "price": 22},
                     "pork stakes": {"quantity": 13, "price": 19},
                     "canvas": {"quantity": 62, "price": 24},
                     "mugs": {"quantity": 59, "price": 69},
                     "skateboards": {"quantity": 28, "price": 87}};
    }
    drop(product) {
        //Mock error:
        if(product == "flower pots") {
            throw new Error();
        }

        if(product in this.data) {
            delete this.data[product];                   
        } 
    }
    print() {
        console.log(this.data);
    }
    search(reference) {
        //Mock error:
        if(reference == "anything") {
            throw new Error();
        }

        let found = {};
        let internalRegex = new RegExp(reference,"i");
        for(let product in this.data)
            if(internalRegex.test(product))
                found[product] = this.data[product];
        return found;
    }
    store(product,quantity,price) {
        if(!(product in this.data)) {
            let content = {"quantity": quantity,
                           "price": price}
            this.data[product] = content;
        } else {
            throw new Error("Product already stored.",
            "/storage/mockDatabase.js",1);
        }
    }
    update(product,quantity,price) {
        if(product in this.data) {
            let content = {"quantity": quantity,
                           "price": price}
            this.data[product] = content;
        } else {
            throw new Error("Product is not in the database.",
            "/storage/mockDatabase.js",1);
        }
    }
    updateQuantity(product,quantity) {
        if(product in this.data) {
            let content = {"quantity": quantity,
                           "price": this.data[product].price}
            this.data[product] = content;
        } else {
            throw new Error("Product is not in the database.",
            "/storage/mockDatabase.js",1);
        }
    }
    updatePrice(product,price) {
        if(product in this.data) {
            let content = {"quantity": this.data[product].quantity,
                           "price": price}
            this.data[product] = content;
        } else {
            throw new Error("Product is not in the database.",
            "/storage/mockDatabase.js",1);
        }
    }
}

module.exports = new mockDatabase();

/*function printResult(database,functionToCall,arg) {
    console.log(arg,functionToCall(database,arg));
}

myDB = new mockDatabase();
printResult(myDB,(database,arg) => database.search(arg),"boa");

myDB.store(69,38,68);
myDB.store("sailboats",88,70);
myDB.store("peaches","s",38);
myDB.store("rings",84,"a");
myDB.store("toilets",9,10);
myDB.drop(97);
myDB.drop("rakes");
myDB.drop("rings");
console.log(myDB.search(16));
console.log(myDB.search("packing tapes"));
console.log(myDB.search("mugs"));
console.log(myDB.search("boa"));
myDB.print();*/
