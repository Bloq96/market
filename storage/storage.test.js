const storage = require("./storage");

test("Checks whether the storage is calling the database store method " +
"correctly, throwing the correct errors when needed.", () => {
    let database = {"store": (product,quantity,price) => {
                                 if(product == "sailboats")
                                     throw new Error();
                             }};
    let mockStorage = new storage.storage(database);
    expect(() => mockStorage.store(69,38,68)).toThrow(TypeError);
    expect(() => mockStorage.store("peaches",-1,38)).toThrow(TypeError);
    expect(() => mockStorage.store("rings",84,undefined)).toThrow(TypeError);
    expect(() => mockStorage.store("sailboats",84,22)
    ).toThrow(storage.DatabaseStoringError);
    expect(mockStorage.store("toilets",9,10)).toBe(undefined);
});

test("Checks whether the storage is calling the database drop method " +
"correctly, throwing the correct errors when needed.", () => {
    let database = {"drop": (product) => {
                                 if(product == "flower pots")
                                     throw new Error();
                             }};
    let mockStorage = new storage.storage(database);
    expect(() => mockStorage.drop(undefined)).toThrow(TypeError);
    expect(() => mockStorage.store("flower pots")
    ).toThrow(storage.DatabaseDropingError);
    expect(mockStorage.store("leaf blowers")).toBe(undefined);
});
