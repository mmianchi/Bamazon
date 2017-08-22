
CREATE DATABASE bamazon;


USE BAMAZON;

CREATE TABLE products(

item_id INTEGER,
product_name VARCHAR(100),
department_name VARCHAR(100),
price INTEGER(30),
stock_quantity INTEGER(30),
PRIMARY KEY(item_id)
);

DROP TABLE products;


SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
values(1,"Bluetooth Wireless Speaker","electronic",80,55);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
values(2,"textbook","book",20,45);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
values(3,"Wireless Mouse","electronic",20,145);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
values(4,"nailpolish","Woman",20,145);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
values(5,"shoes","Woman",120,145);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
values(6,"Dress Vero Moda","Woman",59,145);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
values(7,"Bag","Woman",80,145);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
values(8,"Wired Keyboard","electronic",20,145);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
values(9,"Padded Pet Bolster Bed","electronic",10,145);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
values(10," Dog Bowl","pet",11,145);