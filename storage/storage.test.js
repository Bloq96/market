const storage = require("./storage");

test('checks if storage is calling the DB store method.', () => {
    let database = {"store": (product,quantity,price) => {
                                 if(product == "sailboats")
                                     throw new Error(
                                     "Can not store sailboats.");
                             }};
    let mockStorage = new storage(database);
    //expect(mockStorage.store(69,38,68)).toThrow(TypeError);
    //expect(mockStorage.store("peaches",-1,38)).toThrow(TypeError);
    //expect(mockStorage.store("rings",84,undefined)).toThrow(TypeError);
    //expect(mockStorage.store("sailboats",84,undefined)).toThrow(DatabaseError);
    expect(mockStorage.store("toilets",9,10)).toBe();
});
