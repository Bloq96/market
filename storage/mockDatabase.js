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
        if(product!=undefined && typeof product == "string" && product in this.data) {
            delete this.data[product];                   
        }
    }
    print() {
        console.log(this.data);
    }
    search(reference) {
        let found = {};
        if(reference!=undefined && typeof reference == "string") {
            let internalRegex = new RegExp(reference,"i");
            for(let product in this.data)
                if(internalRegex.test(product))
                    found[product] = this.data[product];
        }
        return found;
    }
    store(product,quantity,price) {
        let content = {"quantity": quantity,
                       "price": price}
        this.data[product] = content;
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
