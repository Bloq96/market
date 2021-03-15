const storage = require("./storage");

test('checks if storage is calling the DB store method.', () => {
    let database = {"store": (product,quantity,price) =>
                                  [product, quantity, price]};
    storage.setDatabase(database);
    expect(storage.store("flash drives",18,8)).toBe(["flash drives", 18, 8]);
});
