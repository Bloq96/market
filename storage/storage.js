class DatabaseError extends Error {};

class storage {
    constructor(database) {
        this.database = database;
    }
    store(product,quantity,price) {
        if(product!=undefined && typeof product == "string") {
            if(quantity!=undefined && typeof quantity == "number" &&
            quantity >= 0) {
                if(price!=undefined && typeof price == "number" && price > 0) {
                    try {
                        this.database.store(product,quantity,price);
                    } catch(error) {
                        throw new DatabaseError("Failed to store data in the " +
                        "database due to: "+error.name+": "+error.message,
                        "/storage/storage.js",1);
                    }
                } else {
                    throw new TypeError(
                    "The price must be a non-negative number.",
                    "/storage/storage.js",1);
                }
            } else {
                throw new TypeError(
                "The quantity must be a positive number.",
                "/storage/storage.js",1);
            }
        } else {
            throw new TypeError("The product name must be a string.",
            "/storage/storage.js",1);
        }
    }
}

module.exports = {"storage":storage,
                  "DatabaseError": DatabaseError}
