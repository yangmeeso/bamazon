DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(60) NULL,
	price DECIMAL(10,2) NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
	("Wool Socks x 3 Pairs", "Accessaries", 15, 30),
	("Fitness Ball", "Fitness", 23.20, 12),
	("Pilates Resistance Band", "Fitness", 8.48, 42),
	("NIKE Gym Shoes", "Fitness", 109.30, 100),
	("Pancake Kit", "Food", 12.50, 200),
	("Brookside Bluebery Dark Chocolate", "Food", 5.82, 30),
	("Hazelnut Syrup 30 OZ", "Food", 30, 5),
	("Apple Watch 3rd Generation", "Electronical", 325.99, 2),
	("Apple iPhone 7 Plus 128 GB", "Electronical", 629.99, 4),
	("Bluetooth Earphone Black", "Electronical", 13.11, 98);