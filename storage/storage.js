class DatabaseError extends Error {};
class DatabaseStoringError extends Error {};
class DatabaseDropingError extends Error {};
class DatabaseSearchingError extends Error {};

class storage {
    constructor(database) {
        this.database = database;
    }
    drop(product) {
        if(product!=undefined && typeof product == "string") {
            try {
                this.database.drop(product);
            } catch(error) {
                throw new DatabaseDropingError("Failed to drop data from the " +
                "database due to: "+error.name+": "+error.message,
                "/storage/storage.js");
            }                 
        } else {
            throw new TypeError("The product name must be a string.",
            "/storage/storage.js")
        }
    }
    search(reference) {
        if(reference!=undefined && typeof reference == "string") {
            try {
                return this.database.search(reference);
            } catch(error) {
                throw new DatabaseSearchingError("Failed to search data in " +
                "the database due to: "+error.name+": "+error.message,
                "/storage/storage.js");
            }
        } else {
            throw new TypeError("The reference must be a string.",
            "/storage/storage.js");
        }
    }
    store(product,quantity,price) {
        if(product!=undefined && typeof product == "string") {
            if(quantity!=undefined && typeof quantity == "number" &&
            quantity >= 0) {
                if(price!=undefined && typeof price == "number" && price > 0) {
                    try {
                        this.database.store(product,quantity,price);
                    } catch(error) {
                        throw new DatabaseStoringError("Failed to store data " +
                        "in the database due to: " + error.name + ": " +
                        error.message, "/storage/storage.js");
                    }
                } else {
                    throw new TypeError(
                    "The price must be a non-negative number.",
                    "/storage/storage.js");
                }
            } else {
                throw new TypeError(
                "The quantity must be a positive number.",
                "/storage/storage.js");
            }
        } else {
            throw new TypeError("The product name must be a string.",
            "/storage/storage.js");
        }
    }
}

module.exports = {"storage":storage,
                  "DatabaseError": DatabaseError,
                  "DatabaseDropingError": DatabaseDropingError,
                  "DatabaseSearchingError": DatabaseSearchingError,
                  "DatabaseStoringError": DatabaseStoringError}
