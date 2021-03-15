const inventory = require("./storage");

test('checks if inventort is calling the DB store method.', () => {
  expect(inventory.store(undefined,
                         "flash drives",
                         18,
                         8,
                         (database,product,quantity,price) =>
                             [product, quantity, price]
                        ).toBe(["flash drives", 18, 8]);
});
