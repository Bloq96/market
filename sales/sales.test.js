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
        "name": "Book",
	"quantity": 1,
	"price": 63
    });
    testCart.add({
        "name": "Sewing Machine",
	"quantity": 3,
        "price": 59
    });
    testCart.add({
        "name": "Book",
	"quantity": 1,
	"price": 48
    });
    expect(testCart.getProducts()).toEqual([
    {"name": "Book", "quantity": 2, "price": 48},
    {"name": "Sewing Machine", "quantity": 3, "price": 59}]);
});
