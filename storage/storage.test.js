const storage = require("./storage");

test('checks if storage is calling the DB store method.', () => {
    let database = {"store": (product,quantity,price) =>
                                  [product, quantity, price]};
    let mockStorage = new storage(database);
    expect(mockStorage.store("flash drives",18,8)).toBe(["flash drives", 18, 8]);
});
