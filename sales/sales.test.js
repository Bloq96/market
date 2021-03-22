const sales = require("./sales");

beforeAll(() => {
    testCart = sales.CartFactory.create("Customer Name");
});

test("Checks whether the cart is being created properly.", () => {
    expect(() => sales.CartFactory.create(2)).toThrow(TypeError);
    expect(testCart.getCustomerName()).toEqual("Customer Name");
    expect(testCart.getTotalCost()).toEqual(0);
    expect(testCart.getProducts()).toEqual([]);
});
