DROP DATABASE IF EXISTS foods_dev;
CREATE DATABASE foods_dev;

\c foods_dev

CREATE TABLE foods (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT,
    calories INTEGER,
    price DECIMAL NOT NULL,
    is_veg BOOLEAN,
    is_spicy BOOLEAN NOT NULL,
    description TEXT
);