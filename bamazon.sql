

DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

use bamazon_DB;

CREATE TABLE products(
item_id VARCHAR(100) NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100),
price integer(255),
stock_quantity integer(255)
);

use bamazon_DB;
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("j", "cheese", "groceries", 12, 67)


INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("i", "pizza", "groceries", 67, 89)


INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("h", "wine", "alcohol", 30, 14)

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("g", "candles", "household", 10, 35)

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("f", "doritos", "snacks", 4, 56)

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("e", "cookies", "snacks", 3, 45)

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("d", "cola", "beverages", 5, 222)

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("c", "doll", "toys", 15, 200)

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("b", "TV", "electronics", 200, 20)

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("a", "iPhone", "electronics", 100, 25)
