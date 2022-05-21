
-- list all tables \d  
CREATE TABLE products (
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale boolean
);

ALTER TABLE products ADD COLUMN featured boolean;
ALTER TABLE products DROP COLUMN featured;

CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <=5)
);

INSERT INTO restaurants (name, location, price_range) values ('mcdonalds', 'new yorks', 3);
INSERT INTO restaurants (id, name, location, price_range) values (124, 'pizza hut', 'new port', 1);


SELECT * FROM restaurants; -- all restaurants

SELECT * FROM restaurants WHERE id = 1; -- find restaurant by id
SELECT * FROM restaurants WHERE price_range = 4; -- find restaurant by price range
SELECT * FROM restaurants WHERE location = "new york"; -- find restaurant by location

INSERT INTO restaurants (price_range) values (12);
-- entering a specific value


-- create table

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >= 1 and rating <=5)
);

ALTER TABLE restaurants ADD CONSTRAINT some_constraint PRIMARY KEY(COLUMN_NAME1,COLUMN_NAME2);