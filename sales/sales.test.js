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

test("Checks whether products are correctly added to the cart.", () => {
    testCart.add({
        "name": "book",
	    "quantity": 1,
	    "price": 63
    });
    testCart.add({
        "name": "sewing Machine",
	    "quantity": 3,
        "price": 59
    });
    testCart.add({
        "name": "book",
	    "quantity": 1,
	    "price": 48
    });
    testCart.add({
        "name": "charger",
        "quantity": 1,
        "price": 68
    });
    expect(testCart.getProducts()).toEqual([
    {"name": "sewing Machine", "quantity": 3, "price": 59},
    {"name": "book", "quantity": 2, "price": 48},
    {"name": "charger", "quantity": 1, "price": 68}]);
    expect(testCart.getTotalCost()).toEqual(341);
});

test("Checks whether products are correctly removed from the cart.", () => {
    expect(() => testCart.remove(undefined)).toThrow(TypeError);
    testCart.remove("soy sauce packet");
    testCart.remove("sewing Machine");
    expect(testCart.getProducts()).toEqual([
    {"name": "book", "quantity": 2, "price": 48},
    {"name": "charger", "quantity": 1, "price": 68}]);
    expect(testCart.getTotalCost()).toEqual(164);
});


test("Checks whether carts are correctly deleted and their total cost is " +
"returned.", () => {
    expect(() => sales.CartFactory.crack(1)).toThrow(TypeError);
    expect(sales.CartFactory.crack(testCart)).toEqual(164);
    expect(testCart).toEqual({});
});
