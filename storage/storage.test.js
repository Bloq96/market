const storage = require("./storage");

const mockDatabase = require("./mockDatabase");

beforeAll(() => {
    mockStorage = new storage.storage(mockDatabase);
});

test("Checks whether the storage is calling the database store method " +
"correctly, throwing the correct errors when needed.", () => {
    expect(() => mockStorage.store(69,38,68)).toThrow(TypeError);
    expect(() => mockStorage.store("peaches",-1,38)).toThrow(TypeError);
    expect(() => mockStorage.store("rings",84,undefined)).toThrow(TypeError);
    expect(() => mockStorage.store("sailboats",84,22)
    ).toThrow(storage.DatabaseStoringError);
    expect(mockStorage.store("toilets",9,10)).toBe(undefined);
});

test("Checks whether the storage is calling the database drop method " +
"correctly, throwing the correct errors when needed.", () => {
    expect(() => mockStorage.drop(undefined)).toThrow(TypeError);
    expect(() => mockStorage.drop("flower pots")
    ).toThrow(storage.DatabaseDropingError);
    expect(mockStorage.drop("leaf blowers")).toBe(undefined);
});

test("Checks whether the storage is calling the database search method " +
"correctly, throwing the correct errors when needed.", () => {
    expect(() => mockStorage.search(0.5)).toThrow(TypeError);
    expect(() => mockStorage.search("anything")
    ).toThrow(storage.DatabaseSearchingError);
    expect(mockStorage.search("boa")).toEqual({
    "sailboats": {"quantity": 16, "price": 22},
    "skateboards": {"quantity": 28, "price": 87}});
});

test("Checks whether the storage is calling the database search method " +
"correctly, throwing the correct errors when needed.", () => {
    expect(() => mockStorage.search(0.5)).toThrow(TypeError);
    expect(() => mockStorage.search("anything")
    ).toThrow(storage.DatabaseSearchingError);
    expect(mockStorage.search("boa")).toEqual({
    "sailboats": {"quantity": 16, "price": 22},
    "skateboards": {"quantity": 28, "price": 87}});
});
