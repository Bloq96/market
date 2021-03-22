const sales = require("./sales");

beforeAll(() => {
    let testCart = CartFactory.create("Customer Name");
});

test("Checks whether the cart is being created properly.", () => {
    expect(() => CartFactory.create(2)).toThrow(TypeError);
    expect(CartFactory.create("My Name")).toBe(sales.Cart);
    expect(testCart.getCustomerName()).toEqual("Customer Name");
    expect(testCart.getTotalCost()).toEqual(0);
    expect(testCart.getProducts()).toEqual({});
});
