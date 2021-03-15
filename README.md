# market

This project was created with the objective of developing a simple sales and inventory management system in a marketing environment. It was developed using a test-driven design methodology.

The basic structure of the market system will be divided into two parts, both controlled by a user, representing the market owner, manager or seller:

The first part is the storage. This part will include four features, which are adding, removing, updating the quantity and searching for a product in stock.

The second part is that of sales. This part will also include four basic features: creating a cart, adding and removing products from the cart, and closing the cart.

Since the focus of this project is not to develop a complete application at once, but to develop the sales and storage logic of that application, no database will be used at the beginning. Instead, mock objects and functions will be created to represent the database. Later, these mocks can be changed to a real database, such as sqllite.


Storage class:
     Implements the adapter pattern to make the storage manipulation process independent of the database used.

Storage functions:

    store: Operation that will request the database to store a new product in its tables.
