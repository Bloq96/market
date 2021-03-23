# market

Obs.: In order to use the features of this project, install npm (npm install) and jest (npm install jest). To run the test suite, use "npm run test".

This project was created with the objective of developing a simple sales and inventory management system in a marketing environment. It was developed using a test-driven design methodology.

The basic structure of the market system will be divided into two parts, both controlled by a user, representing the market owner, manager or seller:

The first part is the storage. This part will include four features, which are adding, removing, updating the quantity and searching for a product in stock.

The second part is that of sales. This part will also include four basic features: creating a cart, adding and removing products from the cart, and closing the cart.

Since the focus of this project is not to develop a complete application at once, but to develop the sales and storage logic of that application, no database will be used at the beginning. Instead, mock objects and functions will be created to represent the database. Later, these mocks can be changed to a real database, such as sqllite.


Storage class:
     Implements the adapter pattern to make the storage manipulation process independent of the database used.

Storage functions:

    store: Operation that will request the database to store a new product in its tables.

    drop: Operation that will request the database to drop a new product from its tables.

    search: Operation that will request the database to find a product in its tables.

    update: Operation that will attempt to update the data in the database. It can call different functions depending on what will be updated.

Cart Factory class:
    Implements a factory for creating and destroying carts.

Cart class:
    Temporary structure that stores the name of a customer, the items he/she wants and the total cost of those items.

Sales functions:

    create: Function from the cart factory that must return a valid empty cart.

    add: Function from cart that adds a valid object to the cart. This function does not check if the object is correct, as the object will come from the database (within the program itself).

    remove: Function from cart that removes an object from the cart if it exists.

    crack: Function of the cart factory that deletes a cart and returns the total cost of the products stored in it.

Future works:
This project contains 8 unit tests for the sales and storage functionalities of the management system. In the future, more tests will be written to add new features and integrate the existing ones. In addition, storage functions will be enhanced to behave asynchronously.
